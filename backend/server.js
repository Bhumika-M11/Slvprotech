const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "SLV PROTECH backend is running",
  });
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, phone, email, service, message } = req.body;

    if (!name || !phone || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email sent to SLV PROTECH
    await transporter.sendMail({
      from: `"SLV PROTECH Website" <${process.env.SMTP_USER}>`,
      to: process.env.COMPANY_EMAIL,
      replyTo: email,
      subject: `New Website Enquiry - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Website Enquiry</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service}</p>

          <h3>Project Details</h3>
          <p>${message}</p>

          <hr />

          <p>
            This enquiry was submitted through the SLV PROTECH website.
          </p>
        </div>
      `,
    });

    // Thank-you email sent to the customer
    await transporter.sendMail({
      from: `"SLV PROTECH" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for contacting SLV PROTECH",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Thank you for contacting SLV PROTECH!</h2>

          <p>Hi ${name},</p>

          <p>
            Thank you for reaching out to SLV PROTECH.
            We have received your enquiry regarding
            <strong>${service}</strong>.
          </p>

          <p>
            Our team will review your requirements and
            reach out to you shortly.
          </p>

          <p>
            Best regards,<br />
            <strong>SLV PROTECH</strong><br />
            Rajajinagar, Bangalore
          </p>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Your enquiry has been submitted successfully.",
    });
  } catch (error) {
    console.error("Email error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to send your enquiry. Please try again later.",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`SLV PROTECH backend running on port ${PORT}`);
});
