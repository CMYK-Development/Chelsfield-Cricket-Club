const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  try {
    console.log("options", options);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // mail.chelsfieldcc.co.uk
      port: 587, // 465
      secure: false, // Use true for SSL (465)
      auth: {
        user: process.env.SMTP_USERNAME, // admin@chelsfieldcc.co.uk
        pass: process.env.SMTP_PASSWORD, // Chelsfieldmain451@32
      },
    });

    // Verify SMTP connection
    await transporter.verify();
    console.log("SMTP Server is ready to send emails.");

    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL, // admin@chelsfieldcc.co.uk
      to: options.email, // Recipient email
      subject: options.subject, // Email subject
      html: ` <h1 style="color: #2c3e50; text-align: center;">Dear ${options.fullName},</h1>
        <p style="font-size: 16px; color: #34495e; line-height: 1.6;">
            We are delighted to welcome you to the <strong>Chelsfield Cricket Club</strong> family! Your membership is now confirmed!
        </p>
        <p style="font-size: 16px; color: #34495e; line-height: 1.6;">
            Thank you for joining us, and we look forward to seeing you on the field!
        </p>
        <p style="font-size: 16px; color: #34495e; line-height: 1.6; text-align: right;">
            Best wishes,<br>
            <strong>Chelsfield Cricket Club</strong>
        </p>`, // Plain text body
      // html: options.htmlMessage || undefined, // HTML body (optional)
      // attachments: options.attachments || [], // Attachments (optional)
    };
    const mailOptionsForAdmin = {
      from: process.env.SMTP_FROM_EMAIL, // admin@chelsfieldcc.co.uk
      to: process.env.SMTP_FROM_EMAIL, // Recipient email
      subject: options.subject, // Email subject
      text: options.message, // Plain text body
      html: options.htmlMessage || undefined, // HTML body (optional)
      attachments: options.attachments || [], // Attachments (optional)
    };
    console.log("mailOptions", mailOptions);

    const info = await transporter.sendMail(mailOptions);
    const infoAdmin = await transporter.sendMail(mailOptionsForAdmin);
    console.log("Email sent:", info.response);
    console.log("Email sent:", infoAdmin.response);
    return info;
  } catch (error) {
    console.error("Failed to send email:", error.message);
    throw new Error("Failed to send email");
  }
};

module.exports = { sendEmail };
