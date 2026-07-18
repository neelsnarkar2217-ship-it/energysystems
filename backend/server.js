const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();   // MUST be before importing routes

const connectDB = require("./config/db");
const enquiryRoutes = require("./routes/enquiry");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Energy Systems Backend Running...");
});

app.use("/api", enquiryRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});