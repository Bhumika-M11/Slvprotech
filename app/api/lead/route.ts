import { NextRequest, NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      company,
      phone,
      email,
      service,
      requirement,
      pageUrl,
      utmSource,
      utmMedium,
      utmCampaign,
      referrer,
      sessionId,
    } = body;

    if (!name || !phone || !email || !requirement || !service) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const sheetId = process.env.GOOGLE_SHEET_ID;
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;

    if (!sheetId || !clientEmail || !privateKey) {
      console.error("Google Sheets credentials missing");
      return NextResponse.json(
        { success: false, error: "Internal server error" },
        { status: 500 }
      );
    }

    const serviceAccountAuth = new JWT({
      email: clientEmail,
      key: privateKey.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);
    await doc.loadInfo();

    const sheet = doc.sheetsByTitle["Leads"];

    if (!sheet) {
      console.error("Leads sheet not found");
      return NextResponse.json(
        { success: false, error: "Internal server error" },
        { status: 500 }
      );
    }

    const now = new Date();
    const dateStr = `${String(now.getDate()).padStart(2, "0")}/${String(
      now.getMonth() + 1
    ).padStart(2, "0")}/${now.getFullYear()}`;
    const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;

    const rowIndex = Math.floor(Math.random() * 10000) + 1;
    const leadIdStr = `L-${String(rowIndex).padStart(4, "0")}`;

    await sheet.addRow({
      "Lead ID": leadIdStr,
      "Date": dateStr,
      "Time": timeStr,
      "Name": name,
      "Company": company || "N/A",
      "Phone": phone,
      "Email": email,
      "Service": service,
      "Requirement": requirement,
      "Page URL": pageUrl || "",
      "UTM Source": utmSource || "",
      "UTM Medium": utmMedium || "",
      "UTM Campaign": utmCampaign || "",
      "Status": "New",
      "Created At": now.toISOString(),
    });

    return NextResponse.json(
      { success: true, leadId: leadIdStr },
      { status: 200 }
    );
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
