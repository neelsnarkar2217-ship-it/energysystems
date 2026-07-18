const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use STARTTLS on port 587
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});

// Check Gmail connection
transporter.verify((error, success) => {
    if (error) {
        console.error("❌ Mail Error:", error);
    } else {
        console.log("✅ Gmail is ready to send emails");
    }
});

module.exports = transporter;