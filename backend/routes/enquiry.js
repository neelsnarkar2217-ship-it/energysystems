const express = require("express");
const router = express.Router();
const Enquiry = require("../models/Enquiry");
const transporter = require("../config/mail");

router.post("/enquiry", async (req, res) => {
    try {

        const enquiry = new Enquiry(req.body);

        console.log("📩 Request Body:", req.body);
        console.log("📂 Database:", enquiry.db.name);
        console.log("📁 Collection:", enquiry.collection.name);

        const saved = await enquiry.save();

        console.log("✅ Saved Document:");
        console.log(saved);

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "🔔 New Enquiry - Energy Systems",

            html: `
                <h2>New Website Enquiry</h2>

                <p><b>Name:</b> ${req.body.fullName}</p>
                <p><b>Company:</b> ${req.body.companyName}</p>
                <p><b>Phone:</b> ${req.body.phone}</p>
                <p><b>Email:</b> ${req.body.email}</p>
                <p><b>Service:</b> ${req.body.serviceRequired}</p>
                <p><b>Location:</b> ${req.body.projectLocation}</p>
                <p><b>Description:</b></p>
                <p>${req.body.projectDescription}</p>
            `
        };

        try {
            console.log("📨 Sending email...");

            const info = await transporter.sendMail(mailOptions);

            console.log("✅ Email sent successfully!");
            console.log(info.response);

        } catch (mailError) {

            console.error("❌ EMAIL ERROR");
            console.error(mailError);

        }

        res.status(201).json({
            success: true,
            message: "Enquiry submitted successfully."
        });

    } catch (error) {

        console.error("❌ SERVER ERROR");
        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
});

module.exports = router;