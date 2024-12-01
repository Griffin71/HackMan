const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

// SMTP transporter setup
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.post("/subscribe", (req, res) => {
    const email = req.body.email;

    if (!email) {
        return res.status(400).send("Email is required.");
    }

    const mailOptions = {
        from: `"HackMan" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: "New Newsletter Subscription",
        text: `A new user subscribed with the email: ${email}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
            return res.status(500).send("Failed to send email.");
        }
        res.status(200).send("Email sent successfully.");
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
