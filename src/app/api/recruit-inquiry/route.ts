import { NextRequest, NextResponse } from "next/server";
import { resolveRecruiter } from "@/config/recruiters";

const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_HEADERS = (apiKey: string) => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${apiKey}`,
  Version: "2021-07-28",
});

// GHL Recruit account custom field IDs (from recruitment-system.md)
const RECRUIT_FIELD_IDS = {
  recruitmentNotes: "nPFaWz7br4n3Ri3KqFsb",      // LARGE_TEXT
  recruitmentSource: "GKAQ7Hsbe9XPWMcQAU9x",     // SINGLE_OPTIONS — value "Inbound"
  interestLevel: "wGB6CcI5nUA6AQQJhnSm",         // SINGLE_OPTIONS — value "Warm"
};

export async function POST(request: NextRequest) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const apiKey = process.env.GHL_PIT_KEY;
  const locationId = process.env.GHL_LOCATION_ID;
  const fallbackEmail = process.env.NOTIFY_EMAIL_FALLBACK || "david@lendwisemtg.com";

  if (!apiKey || !locationId) {
    return NextResponse.json(
      { error: "Server configuration missing" },
      { status: 500 }
    );
  }

  // ── Required fields validation ─────────────────────────────────────
  const fullName = String(data.fullName || "").trim();
  const email = String(data.email || "").trim().toLowerCase();
  if (!fullName || !email) {
    return NextResponse.json(
      { error: "Name and email are required" },
      { status: 400 }
    );
  }

  // Honeypot — silently accept and discard if filled (bot trap)
  if (data.website) {
    return NextResponse.json({ success: true, contactId: null });
  }

  const nameParts = fullName.split(" ");
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";

  // ── Resolve recruiter from ?ref= ───────────────────────────────────
  const { recruiter, slug, matched } = resolveRecruiter(
    typeof data.ref === "string" ? data.ref : null
  );
  const notifyEmail = recruiter.email || fallbackEmail;

  // ── Optional fields ────────────────────────────────────────────────
  const phone = String(data.phone || "").trim();
  const company = String(data.currentCompany || "").trim();
  const nmls = String(data.nmls || "").trim();
  const states = String(data.statesLicensed || "").trim();
  const volume = String(data.volume12mo || "").trim();
  const message = String(data.message || "").trim();

  // ── Step 1: Upsert contact in GHL Recruit ──────────────────────────
  const tags = [
    "inbound-recruit",
    `ref-${slug}`,
    "loan-officer",
  ];

  const upsertRes = await fetch(`${GHL_BASE}/contacts/upsert`, {
    method: "POST",
    headers: GHL_HEADERS(apiKey),
    body: JSON.stringify({
      locationId,
      firstName,
      lastName,
      email,
      phone: phone || undefined,
      companyName: company || undefined,
      tags,
      source: `Landing Page - joinlendwise (ref=${slug})`,
    }),
  });

  if (!upsertRes.ok) {
    const detail = await upsertRes.text();
    return NextResponse.json(
      { error: "Failed to create contact", detail },
      { status: upsertRes.status }
    );
  }

  const upsertResult = await upsertRes.json();
  const contactId = upsertResult.contact?.id;
  if (!contactId) {
    return NextResponse.json(
      { error: "Contact created but no ID returned" },
      { status: 500 }
    );
  }

  // ── Step 2: PUT custom fields (upsert ignores them — known quirk) ──
  await fetch(`${GHL_BASE}/contacts/${contactId}`, {
    method: "PUT",
    headers: GHL_HEADERS(apiKey),
    body: JSON.stringify({
      customFields: [
        { id: RECRUIT_FIELD_IDS.recruitmentSource, value: "Inbound" },
        { id: RECRUIT_FIELD_IDS.interestLevel, value: "Warm" },
        {
          id: RECRUIT_FIELD_IDS.recruitmentNotes,
          value: [
            `Inbound from joinlendwise.teamlendwise.com`,
            `Referrer: ${recruiter.name} (${matched ? `?ref=${slug}` : "no ref / fallback"})`,
            `Company: ${company || "—"}`,
            `NMLS: ${nmls || "—"}`,
            `States: ${states || "—"}`,
            `12-mo volume: ${volume || "—"}`,
            message ? `\nMessage:\n${message}` : "",
          ].filter(Boolean).join("\n"),
        },
      ],
    }),
  }).catch(() => {
    /* non-critical — base contact saved */
  });

  // ── Step 3: Add note with full submission detail ───────────────────
  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
  });
  await fetch(`${GHL_BASE}/contacts/${contactId}/notes`, {
    method: "POST",
    headers: GHL_HEADERS(apiKey),
    body: JSON.stringify({
      body:
        `Inbound recruit submission — joinlendwise.teamlendwise.com\n\n` +
        `Routed to: ${recruiter.name} <${recruiter.email}>\n` +
        `Ref slug: ${slug}${matched ? "" : "  (UNMATCHED — fell back to David)"}\n` +
        `Submitted: ${submittedAt} PT\n\n` +
        `Name: ${firstName} ${lastName}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone || "—"}\n` +
        `Current Company: ${company || "—"}\n` +
        `NMLS: ${nmls || "—"}\n` +
        `States Licensed: ${states || "—"}\n` +
        `12-mo Volume: ${volume || "—"}\n` +
        (message ? `\nMessage:\n${message}\n` : ""),
    }),
  }).catch(() => {
    /* non-critical */
  });

  // ── Step 4: Notify the matched recruiter via GHL email ─────────────
  // Reuses GHL's email rail — no SMTP/SendGrid needed (same pattern as rate-tracker)
  const subject = matched
    ? `New recruit lead for you: ${firstName} ${lastName}`
    : `New recruit lead (no ref — fallback to you): ${firstName} ${lastName}`;
  await fetch(`${GHL_BASE}/conversations/messages`, {
    method: "POST",
    headers: GHL_HEADERS(apiKey),
    body: JSON.stringify({
      type: "Email",
      contactId,
      subject,
      message: buildNotifyEmailHtml({
        recruiterName: recruiter.name,
        firstName,
        lastName,
        email,
        phone,
        company,
        nmls,
        states,
        volume,
        message,
        slug,
        matched,
        submittedAt,
      }),
      emailTo: notifyEmail,
    }),
  }).catch(() => {
    /* non-critical — contact + custom fields already saved, recruiter can pull from GHL UI */
  });

  return NextResponse.json({
    success: true,
    contactId,
    routedTo: recruiter.name,
    matched,
  });
}

function buildNotifyEmailHtml(p: {
  recruiterName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  nmls: string;
  states: string;
  volume: string;
  message: string;
  slug: string;
  matched: boolean;
  submittedAt: string;
}) {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f8f8f8;">${label}</td>` +
    `<td style="padding:8px;border:1px solid #ddd;">${value || "—"}</td></tr>`;

  const refNote = p.matched
    ? `Inbound via your share-link (<code>?ref=${p.slug}</code>).`
    : `Inbound with no recognized ref — routed to you as fallback (David).`;

  return `<div style="font-family:Arial,sans-serif;color:#0a1628;max-width:600px;">
  <h2 style="color:#0a1628;border-bottom:2px solid #C9A227;padding-bottom:8px;">
    New Recruit Lead — joinlendwise.teamlendwise.com
  </h2>
  <p style="color:#555;font-size:14px;">Hi ${p.recruiterName.split(" ")[0]},<br/>${refNote}</p>
  <table style="border-collapse:collapse;width:100%;margin-top:16px;font-size:14px;">
    ${row("Name", `${p.firstName} ${p.lastName}`)}
    ${row("Email", `<a href="mailto:${p.email}">${p.email}</a>`)}
    ${row("Phone", p.phone ? `<a href="tel:${p.phone}">${p.phone}</a>` : "")}
    ${row("Current Company", p.company)}
    ${row("NMLS", p.nmls)}
    ${row("States Licensed", p.states)}
    ${row("12-mo Volume", p.volume)}
    ${row("Submitted", p.submittedAt + " PT")}
  </table>
  ${p.message ? `<div style="margin-top:16px;padding:12px;background:#f8f8f8;border-left:3px solid #C9A227;">
    <strong>Message:</strong><br/>${p.message.replace(/\n/g, "<br/>")}
  </div>` : ""}
  <p style="margin-top:20px;font-size:12px;color:#888;">
    Contact created in GHL Recruit account. Tagged <code>inbound-recruit</code> + <code>ref-${p.slug}</code>.
  </p>
</div>`;
}
