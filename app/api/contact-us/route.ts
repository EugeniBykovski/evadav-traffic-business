import React from "react";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { firstName, lastName, email, phone, subject, message } = formData;

    const url = new URL(request.url);
    const locale = url.pathname.split("/")[1] || "en";

    const localizedSubject =
      locale === "pl"
        ? "Nowe zapytanie z formularza kontaktowego"
        : "New Contact Form Inquiry";

    const recipientEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "";

    const emailData = await resend.emails.send({
      from: "request@wartraf.com",
      to: recipientEmail,
      subject: localizedSubject,
      react: React.createElement(EmailTemplate, {
        firstName,
        lastName,
        email,
        phone,
        subject,
        message,
      }),
    });

    return NextResponse.json({ success: true, data: emailData });
  } catch (error) {
    const errorMessage =
      (error as Error)?.message || "An unknown error occurred";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
