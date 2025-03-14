import { Resend } from 'resend';

export async function POST(req: Request) {
    try {
        const { fullName, company, email, phone, message } = await req.json();

        if (!fullName || !company || !email || !phone || !message) {
            return Response.json({ error: "All fields are required" }, { status: 400 });
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
            from: 'no-reply@lktmarine.com', 
            to: process.env.EMAIL_ADDRESS || '', 
            subject: 'New Quotation Request from Website',
            text: `
          Full Name: ${fullName}
          Company: ${company}
          Email: ${email}
          Phone: ${phone}
          Message: ${message}
        `,
        });
        return Response.json({ success: true });

    } catch (error) {
        console.error("Error sending email:", error);
        return Response.json({ error: "Failed to send email" }, { status: 500 });
    }
}
