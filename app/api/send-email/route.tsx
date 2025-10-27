import { Resend } from "resend"
import { type NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, mobile, countryCode, company, service, description } = await request.json()

    const userEmailResponse = await resend.emails.send({
      from: "QoraxAI <noreply@qoraxai.com>",
      to: email,
      subject: "Thank You for Your Tech Audit Request - QoraxAI",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for requesting a free tech audit!</h2>
          <p>Hi ${name},</p>
          <p>We've received your submission and appreciate your interest in QoraxAI. Our team will review your requirements and contact you shortly to discuss how we can help transform your business.</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your Submission Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${countryCode} ${mobile}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Description:</strong></p>
            <p>${description.replace(/\n/g, "<br/>")}</p>
          </div>
          <p>Best regards,<br/>The QoraxAI Team</p>
        </div>
      `,
    })

    if (userEmailResponse.error) {
      console.error("Error sending user email:", userEmailResponse.error)
      return NextResponse.json({ error: "Failed to send confirmation email" }, { status: 500 })
    }

    const adminEmailResponse = await resend.emails.send({
      from: "QoraxAI <noreply@qoraxai.com>",
      to: "sayeed@qoraxai.com",
      subject: `New Tech Audit Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Tech Audit Request</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${countryCode} ${mobile}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Service of Interest:</strong> ${service}</p>
            <p><strong>Description:</strong></p>
            <p>${description.replace(/\n/g, "<br/>")}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">This is an automated notification from your QoraxAI contact form.</p>
        </div>
      `,
    })

    if (adminEmailResponse.error) {
      console.error("Error sending admin email:", adminEmailResponse.error)
    }

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error in send-email route:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
