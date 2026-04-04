import { NextRequest, NextResponse } from "next/server";

const GHL_BASE = "https://services.leadconnectorhq.com";
const LOCATION_ID = process.env.GHL_RECRUIT_LOCATION_ID || "uK2c0yPntuZ6C11cvADl";
const PIT_KEY = process.env.GHL_RECRUIT_PIT_KEY || "";
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "david@lendwisemtg.com";
const PIPELINE_ID = "t93y7OtzixiOjKG8SuhW";
const NEW_LEAD_STAGE = "497ea5b6-39d2-4c60-8d00-b34f049c3fde";

async function ghlRequest(method: string, path: string, body?: Record<string, unknown>) {
  const res = await fetch(`${GHL_BASE}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${PIT_KEY}`,
      Version: "2021-07-28",
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  return res.json();
}

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, company, message } = await req.json();

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: "Name and email required" }, { status: 400 });
    }

    // 1. Upsert contact in GHL Recruit
    const upsertRes = await ghlRequest("POST", "/contacts/upsert", {
      locationId: LOCATION_ID,
      firstName,
      lastName,
      email,
      phone: phone || undefined,
      companyName: company || undefined,
      source: "Website - teamlendwise.com",
      tags: ["inbound-recruit"],
    });

    const contactId = upsertRes?.contact?.id;

    // 2. Add note with their message
    if (contactId && message) {
      await ghlRequest("POST", `/contacts/${contactId}/notes`, {
        body: `[Website Inquiry] ${message}`,
      });
    }

    // 3. Create opportunity in recruitment pipeline
    if (contactId) {
      await ghlRequest("POST", "/opportunities/", {
        locationId: LOCATION_ID,
        pipelineId: PIPELINE_ID,
        pipelineStageId: NEW_LEAD_STAGE,
        contactId,
        name: `${firstName} ${lastName} - Website Inquiry`,
        status: "open",
        source: "Website - teamlendwise.com",
      });
    }

    // 4. Send notification email via GHL conversation
    // (Using a simple fetch to avoid needing SMTP — GHL will email David)
    if (contactId) {
      await ghlRequest("POST", `/contacts/${contactId}/notes`, {
        body: `[NOTIFY] New recruitment inquiry from website.\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nCompany: ${company || "N/A"}\nMessage: ${message || "N/A"}`,
      });
    }

    return NextResponse.json({ success: true, contactId });
  } catch (err) {
    console.error("Recruit inquiry error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
