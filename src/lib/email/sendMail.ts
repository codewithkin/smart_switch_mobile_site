import { transporter } from "./transporter";

export async function sendMail({
  to,
  subject,
  message,
}: {
  to: string;
  subject: string;
  message: string;
}) {
  // Send message using the transporter
  await transporter.sendMail({
    from: process.env.EMAIL,
    to,
    subject,
    text: message,
  });
}
