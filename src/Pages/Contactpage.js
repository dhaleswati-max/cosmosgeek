import React, { useState } from "react";
import "./contact.css";
import Footer from '../components/Footer';

import { Box, Container, Typography } from "@mui/material";

const Contact = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false); // Track submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // The Form.io submission endpoint usually requires data to be wrapped in a "data" object.
    try {
    // 1️⃣ Save to Form.io
    await fetch("https://qahxxuqksycmust.form.io/contact/submission", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: formData })
    });

    // 2️⃣ Send to Zapier
   const response= await fetch("https://hooks.zapier.com/hooks/catch/26746489/uxdi3j4/", {
  method: "POST",
  body: new URLSearchParams(formData)// send the same formData
});
   

    setSubmitted(true);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });

    setTimeout(() => setSubmitted(false), 5000);

  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Submission failed.");
  }
};


  return (
    <>
       <Box
            id="home"
              sx={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        {/* LCP Image */}
        <Box
          component="img"
          src="https://res.cloudinary.com/dpqq2vxc6/image/upload/v1772009827/imagenew_gcpefb.webp"
          alt=""
          loading="eager"
          fetchPriority="high"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
      
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            color: "white",
             px: { xs: 2, sm: 3, md: 3 },
            display:"flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems:"center",
           
             minHeight: "100vh", 
            
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "2rem", sm: "2.3rem", md: "4rem" },
              textShadow: "0 0 20px rgba(255,255,255,0.2)",
              color: "#4169E1",
            }}
          >
            Get In Touch
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 3,
              opacity: 0.9,
             fontSize: { xs: "1rem", sm: "1.2rem", md: "1.8rem" },
              maxWidth: { xs: "95%", sm: "85%", md: "100%" },
              textShadow: "0 0 10px rgba(255,255,255,0.15)",
            }}
          >
            Have a project in mind or want to learn more about our services? We'd love to hear from you.
          </Typography>
        </Container>
      </Box>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>

          <div className="info-item">
            <span>📧</span>
            <div>
              <h4>Email</h4>
              <p>info@cosmogeek.com</p>
            </div>
          </div>

          <div className="info-item">
            <span>📞</span>
            <div>
              <h4>Phone</h4>
              <p>+91 7822839072</p>
            </div>
          </div>

          <div className="info-item">
            <span>📍</span>
            <div>
              <h4>Office</h4>
              <p>Cosmos Digital Services ,Krishna Nagar </p>
              <p>Near sai temple,Maganwadi,Wardha</p>
            </div>
          </div>

          <h3 className="location-title">Our Location</h3>
          <h4>Visit our office or contact us remotely. We're here to help.</h4>
          <div style={{ width: "100%", height: "300px" }}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.3221825406554!2d78.59256697409126!3d20.73773159771304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd47fc6f10ece8b%3A0xee50d998cbd2a816!2sCOSMOS%20DIGITAL%20-%20Software%20Company%20%7C%20Custom%20Software%20%26%20IT%20Solutions%20Company%20In%20Wardha!5e0!3m2!1sen!2sin!4v1773218929638!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google map"
  ></iframe>
</div>
         
        </div>

        <div className="contact-form">
          <h3>Send Us a Message</h3>

          {submitted && (
            <div className="thank-you-message" style={{color: "green", fontSize:"24px",
             marginBottom: "15px"}}>
              Thank you for showing your interest! We'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="field">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder=""
                  required
                />
              </div>
              <div className="field">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=""
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder=""
                />
              </div>
              <div className="field">
                <label>Service interested in</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a Service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="App Development">App Development</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                </select>
              </div>
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project or enquiry"
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
