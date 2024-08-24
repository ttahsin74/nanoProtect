import { sendMail } from "@/mailer/mailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Parse JSON body
    const body = await request.json();

    // Validate required fields
    const { to, emailBody, subject, securityKey } = body;
    if (!to || !emailBody || !subject || !securityKey) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 } // Bad Request
      );
    }

    // Validate security key
    if (securityKey !== process.env.MAIL_SECURITY_KEY) {
      return NextResponse.json(
        { message: "Invalid Security Key" },
        { status: 401 } // Unauthorized
      );
    }

    // Send the email
    await sendMail(to, subject, emailBody);

    return NextResponse.json(
      { message: "Email Sent Successfully", to },
      { status: 201 } // Created
    );
  } catch (error) {
    // Log error details (but avoid exposing sensitive information)
    console.error("Error sending email:", error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 } // Internal Server Error
    );
  }
}
