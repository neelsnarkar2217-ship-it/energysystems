const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    companyName: {
        type: String
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    serviceRequired: {
        type: String,
        required: true
    },
    projectLocation: {
        type: String
    },
    projectDescription: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Enquiry", enquirySchema);