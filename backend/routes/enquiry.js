const express = require("express");
const router = express.Router();
const Enquiry = require("../models/Enquiry");
const transporter = require("../config/mail");

router.post("/enquiry", async (req, res) => {
    try {

        const enquiry = new Enquiry(req.body);
        await enquiry.save();

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

        // await transporter.sendMail(mailOptions);
        console.log("Email skipped for testing");

        res.status(201).json({
            success: true,
            message: "Enquiry submitted successfully."
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
});

module.exports = router;