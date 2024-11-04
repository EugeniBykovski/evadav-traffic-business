interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  phone,
  subject,
  message,
}) => (
  <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
    <h1>Contact Form Inquiry</h1>
    <p>
      <strong>Name:</strong> {firstName} {lastName}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Phone:</strong> {phone}
    </p>
    <p>
      <strong>Subject:</strong> {subject}
    </p>
    <p>
      <strong>Message:</strong>
    </p>
    <p>{message}</p>
  </div>
);
