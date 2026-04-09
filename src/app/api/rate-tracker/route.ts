import { NextRequest, NextResponse } from "next/server";

const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_HEADERS = (apiKey: string) => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${apiKey}`,
  Version: "2021-07-28",
});

export async function POST(request: NextRequest) {
  const data = await request.json();

  const apiKey = process.env.GHL_PIT_KEY;
  const locationId = process.env.GHL_LOCATION_ID;
  const notifyEmail = process.env.NOTIFY_EMAIL || "david@lendwisemtg.com";

  if (!apiKey || !locationId) {
    return NextResponse.json(
      { error: "Server configuration missing" },
      { status: 500 }
    );
  }

  const nameParts = (data.fullName as string).trim().split(" ");
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";

  // Step 1: Upsert contact with basic info + rate-tracker tag
  const upsertRes = await fetch(`${GHL_BASE}/contacts/upsert`, {
    method: "POST",
    headers: GHL_HEADERS(apiKey),
    body: JSON.stringify({
      locationId,
      firstName,
      lastName,
      email: data.email,
      phone: data.phone,
      address1: data.propertyAddress,
      tags: ["rate-tracker"],
      source: "Landing Page - Rate Tracker",
    }),
  });

  if (!upsertRes.ok) {
    const err = await upsertRes.text();
    return NextResponse.json(
      { error: "Failed to create contact", detail: err },
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

  // Step 2: Update contact with custom fields (requires PUT with id/value format)
  await fetch(`${GHL_BASE}/contacts/${contactId}`, {
    method: "PUT",
    headers: GHL_HEADERS(apiKey),
    body: JSON.stringify({
      customFields: [
        { id: "5dxPYZDn0jcCawMa2v1P", value: data.currentRate },
        { id: "5rv9ojFH3SxFeLsco4Bj", value: data.loanAmount },
        { id: "vtisaPzXVeWRhkmy8dyk", value: data.propertyValue },
        { id: "srGW8uy9TFgHPucr1Rx7", value: data.creditScore },
        { id: "yrrFuBH5vFNxevrrhTml", value: data.occupancyType },
        { id: "TxHK81KyYG3fPwPr3KXH", value: data.currentLoanProgram },
      ],
    }),
  });

  // Step 3: Add note to contact with full submission details
  try {
    await fetch(`${GHL_BASE}/contacts/${contactId}/notes`, {
      method: "POST",
      headers: GHL_HEADERS(apiKey),
      body: JSON.stringify({
        body:
          `Rate Tracker Submission from Landing Page\n\n` +
          `Name: ${firstName} ${lastName}\n` +
          `Email: ${data.email}\n` +
          `Phone: ${data.phone}\n` +
          `Property: ${data.propertyAddress}\n` +
          `Current Rate: ${data.currentRate}%\n` +
          `Loan Amount: $${Number(data.loanAmount).toLocaleString()}\n` +
          `Property Value: $${Number(data.propertyValue).toLocaleString()}\n` +
          `Credit Score: ${data.creditScore}\n` +
          `Occupancy: ${data.occupancyType}\n` +
          `Current Program: ${data.currentLoanProgram}\n` +
          `Submitted: ${new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })}`,
      }),
    });
  } catch {
    // Non-critical
  }

  // Step 4: Send notification email to David via GHL
  try {
    await fetch(`${GHL_BASE}/conversations/messages`, {
      method: "POST",
      headers: GHL_HEADERS(apiKey),
      body: JSON.stringify({
        type: "Email",
        contactId,
        subject: `New Rate Tracker Lead: ${firstName} ${lastName}`,
        message: `<h2>New Rate Tracker Submission</h2>
<table style="border-collapse:collapse;width:100%;max-width:500px;">
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${firstName} ${lastName}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${data.email}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${data.phone}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Property</td><td style="padding:8px;border:1px solid #ddd;">${data.propertyAddress}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Current Rate</td><td style="padding:8px;border:1px solid #ddd;">${data.currentRate}%</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Loan Amount</td><td style="padding:8px;border:1px solid #ddd;">$${Number(data.loanAmount).toLocaleString()}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Property Value</td><td style="padding:8px;border:1px solid #ddd;">$${Number(data.propertyValue).toLocaleString()}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Credit Score</td><td style="padding:8px;border:1px solid #ddd;">${data.creditScore}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Occupancy</td><td style="padding:8px;border:1px solid #ddd;">${data.occupancyType}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Current Program</td><td style="padding:8px;border:1px solid #ddd;">${data.currentLoanProgram}</td></tr>
</table>
<p style="margin-top:16px;color:#666;">Submitted from teamlendwise.com Rate Tracker</p>`,
        emailTo: notifyEmail,
      }),
    });
  } catch {
    // Non-critical — contact + custom fields already saved
  }

  return NextResponse.json({ success: true, contactId });
}
