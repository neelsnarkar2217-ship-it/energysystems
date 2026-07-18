const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Check Gmail connection
transporter.verify(function (error, success) {
    if (error) {
        console.log("❌ Mail Error:", error);
    } else {
        console.log("✅ Gmail is ready to send emails");
    }
});

module.exports = transporter;