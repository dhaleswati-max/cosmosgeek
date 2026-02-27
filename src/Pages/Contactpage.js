import React, { useState } from "react";
import "./contact.css";
import Footer from '../components/Footer';
import imagenew from '../Assets/Images/imagenew.webp';
import map from '../Assets/Images/map.webp'
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

    console.log("Form Data:", formData);
  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    console.log(data);

    // Show thank you message
    setSubmitted(true);

    // Reset form
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
          src="https://cosmosdigital.in/static/media/imagenew.add581917f048947874f.webp"
          alt=""
          loading="eager"
          fetchpriority="high"
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
            px: 3,
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
           
            height: { xs: "auto", md: "100vh" },
            py: { xs: 6, md: 0 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "2.5rem", md: "4rem" },
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
              fontSize: { xs: "1.2rem", md: "1.8rem" },
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
              <p>support@cosmosdigital.com</p>
            </div>
          </div>

          <div className="info-item">
            <span>📞</span>
            <div>
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="info-item">
            <span>📍</span>
            <div>
              <h4>Office</h4>
              <p>123 Innovation Drive, Tech City</p>
            </div>
          </div>

          <h3 className="location-title">Our Location</h3>
          <h4>Visit our office or contact us remotely. We're here to help.</h4>
          <img src="https://cosmosdigital.in/static/media/map.98e17d18fef320a0414e.webp"
           alt="Our location map" className="location-map" />
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
