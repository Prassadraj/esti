"use client";
import React, { useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import { faRocketchat } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact.css";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [messageLoading, setMessageLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessageLoading(true);
    try {
      const response = await axios.post(
        "https://cpcnew.onrender.com/send-email",
        formData
      );
      console.log("Success:", response.data);
      setMessageLoading(false);
      toast.success("SuccessFully Message Sent");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="relative p-4 laptop:p-5 laptop:h-screen bg-black  tablet:flex gap-20 justify-center items-center">
      {/* Background Video */}
      {/* <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/clothing.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {messageLoading && (
        <div className="fixed top-0 left-0 h-screen w-full bg-black/50 z-50">
          <div className="flex justify-center items-center h-screen text-xl text-white">
            <FontAwesomeIcon icon={faRocketchat} /> Sending...
          </div>
        </div>
      )}

      <div className="relative z-10">
        <p className="font-bold text-white text-lg tablet:text-3xl font-poppins">
          {`     Let's Get in Touch`}
        </p>
        <p className="tablet:text-xl text-white mt-2 mb-2 text-left max-w-lg">
          {` We're here to assist you with any questions or concerns. Reach out to
          us and we'll respond as soon as we can.`}
        </p>
      </div>

      {/* Form Section */}
      <div className="relative z-10">
        <form
          onSubmit={handleSubmit}
          className="w-full laptop:w-[30vw] flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full h-[7vh] outline-none text-xl p-3 rounded-lg text-white bg-transparent border border-white placeholder:text-white"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-[7vh] outline-none text-xl p-3 rounded-lg text-white bg-transparent border border-white placeholder:text-white"
            placeholder="Email Address"
            required
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full h-[7vh] outline-none text-xl p-3 rounded-lg text-white bg-transparent border border-white placeholder:text-white"
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
  );
}

export default Contact;
