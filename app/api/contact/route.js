import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json(); //  posted data
    const { name, address, message } = body;

    await resend.emails.send({
      from: "GIGnnovate Contact <onboarding@resend.dev>",
      to: "nictacks@gmail.com",
      subject: "New Contact Form Submission",
      html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${address}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `,
    });
    await resend.emails.send({
      from: "GIGnnovate Contact <onboarding@resend.dev>",
      to: address,
      subject: "Thanks for contacting GIGnnovate!",
      html: `
          <p>Hi ${name},</p>
          <p>Thanks for reaching out. We're excited to hear from you and will be in touch soon.</p>
          <p>- GIGnnovate</p>
        `,
    });

    return new Response("Success", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error", { status: 500 });
  }
}
