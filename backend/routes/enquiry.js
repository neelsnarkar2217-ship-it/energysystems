const express = require("express");
const router = express.Router();
const Enquiry = require("../models/Enquiry");

router.post("/enquiry", async (req, res) => {
    try {

        const enquiry = new Enquiry(req.body);
        await enquiry.save();

        res.status(201).json({
            success: true,
            message: "Enquiry submitted successfully."
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
});

module.exports = router;