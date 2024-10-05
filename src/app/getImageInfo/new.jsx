import React, { useState } from "react";
import "./contactUs.css";
import video from "../../Video/contact.mp4";
import axios from "axios";
import { toast } from "react-toastify";
import { faRocketchat } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    file: null, // Added for file upload
  });
  const [messageLoading, setMessageLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessageLoading(true);

    const form = new FormData(); // Using FormData to handle files
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("message", formData.message);
    form.append("file", formData.file); // Append the file

    try {
      const response = await axios.post(
        "http://localhost:5000/send-email",
        form,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("Success:", response.data);
      setMessageLoading(false);
      toast.success("Successfully Sent!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        file: null, // Reset the file input
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="p-4 laptop:p-5 laptop:h-[100vh] bg-black mb-10 flex justify-center items-center laptop:mt-20">
      {messageLoading && (
        <div className="fixed top-0 left-0 h-screen w-full bg-black/50 z-50">
          <div className="flex justify-center items-center h-screen text-xl text-white">
            <FontAwesomeIcon icon={faRocketchat} /> Sending...
          </div>
        </div>
      )}

      <div className="laptop:h-[85vh] h-auto w-full laptop:w-[85vw] bg-light-green rounded-xl relative flex flex-col laptop:flex-row overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0 rounded-xl"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 w-full h-full bg-black opacity-50 z-0 rounded-xl"></div>
        <div className="relative z-10 tablet:p-5 laptop:w-1/2 flex flex-col justify-center items-start text-center">
          <p className="font-bold text-white text-lg tablet:text-3xl z-10 font-poppins">
            Let's Get in Touch
          </p>
          <p className="tablet:text-xl text-white mt-2 mb-2 text-left">
            We're here to assist you with any questions or concerns. Reach out
            to us and we'll respond as soon as we can.
          </p>
        </div>
        <div className="relative z-10 px-2 laptop:w-1/2 flex flex-col gap-4 items-center tablet:mt-10 laptop:mt-0">
          <form
            onSubmit={handleSubmit}
            className="w-full laptop:w-[30vw] flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-[7vh] outline-none text-xl p-3 rounded-lg text-white bg-transparent"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-[7vh] outline-none text-xl p-3 rounded-lg text-white placeholder-white bg-transparent border border-white"
              placeholder="Email Address"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full h-[7vh] outline-none text-xl p-3 rounded-lg text-white bg-transparent border border-white"
              placeholder="Phone Number"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Have anything to say..."
              className="placeholder:text-white h-[20vh] w-full pt-2 tablet:text-xl box-border outline-none p-3 rounded-lg text-white bg-transparent border border-white"
              required
            ></textarea>
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              className="w-full h-[7vh] outline-none text-xl p-3 rounded-lg text-white bg-transparent border border-white"
              accept=".jpg,.png,.pdf" // Add accepted file types
            />
            <div className="flex items-center justify-center">
              <button type="submit" className="btn-53">
                <div className="original text-lg">Send</div>
                <div className="letters text-lg">
                  <span>S</span>
                  <span>e</span>
                  <span>n</span>
                  <span>d</span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

//server
const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Multer setup to handle file uploads
const upload = multer({ dest: "uploads/" }); // Store uploaded files in 'uploads/' folder

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "prassadpr111@gmail.com", // Your Gmail address
    pass: "tfwmacefxxmsnswo", // Your generated app password
  },
});

app.post("/send-email", upload.single("file"), async (req, res) => {
  const { name, phone, message, email } = req.body;
  const file = req.file; // Access the uploaded file

  try {
    const info = await transporter.sendMail({
      from: email, // Sender address
      to: "prassadpr111@gmail.com", // Your receiving email address
      subject: "From website", // Subject line
      text: message, // Plain text body
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
      attachments: file
        ? [
            {
              filename: file.originalname,
              path: file.path,
            },
          ]
        : [], // Attach the file if it's provided
    });

    res.status(200).json({ message: "Email sent", messageId: info.messageId });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ message: "Error sending email", error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server connected on port ${PORT}`);
});
