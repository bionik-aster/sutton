import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  try {
    const { email } = req.body;

    await resend.emails.send({
      from: "Sutton Empire <onboarding@resend.dev>",
      to: email,
      subject: "[CITIZENSHIP APPLICATION] Thank you for submitting! / Xedžidú vir asomezo!",
      html: `
        <p>This is an email sent by the Sutton Empire Imperial Archives.</p>
        <p>Thank you for submitting the registration application. Your submission is being processed.
        If you receive this email, the form has submitted correctly, and the submission can be expected
        to be sent to the verifiers.</p>
        <br>
        <p>- Aster I, Iþas of the Sutton Empire</p>
        <img src="https://suttonempire.vercel.app/sutton_coa.png" height=120>
        <p><i>VIR IÞPAIXÁ KI MÁLAS</i></p>
      `,
    });

    res.status(200).json({
      message: "Error 200 - Email sent successfully!",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error 500 - Failed to send email",
    });
  }
}