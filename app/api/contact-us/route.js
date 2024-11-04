import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { mailOptions, transporter } from "@/emails/client";
import { replaceMergeTags, stripHTMLTags } from "@/emails/helpers";

export async function POST(request) {
  try {
    const data = await request.json();

    const htmlFilePath = path.join(
      process.cwd(),
      "emails",
      "contact-form.html"
    );
    let htmlContent;

    try {
      htmlContent = fs.readFileSync(htmlFilePath, "utf8");
    } catch (err) {
      console.error("Error reading HTML file:", err);
      return NextResponse.json({ error: "Failed to read email template" });
    }

    htmlContent = replaceMergeTags(data, htmlContent);
    const plainTextContent = stripHTMLTags(htmlContent);

    await transporter.sendMail({
      ...mailOptions,
      subject: `New Contact Form Inquiry`,
      text: plainTextContent,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error in API handler:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
