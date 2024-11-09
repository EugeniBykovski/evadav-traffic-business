import React from "react";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse the request to get the form data and detect the current locale
    const formData = await request.json();
    const { firstName, lastName, email, phone, subject, message } = formData;

    // Extract the locale from the URL
    const url = new URL(request.url);
    const locale = url.pathname.split("/")[1] || "en"; // Default to 'en' if locale is not found

    // Define localized email subject based on locale
    const localizedSubject =
      locale === "pl"
        ? "Nowe zapytanie z formularza kontaktowego"
        : "New Contact Form Inquiry";

    // Use a localized recipient email or default one
    const recipientEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "";

    // Send the email using the Resend API
    const emailData = await resend.emails.send({
      from: "no-reply@resend.dev",
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

    // Return a success response
    return NextResponse.json({ success: true, data: emailData });
  } catch (error) {
    const errorMessage =
      (error as Error)?.message || "An unknown error occurred";

    // Return an error response with the appropriate status code
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
