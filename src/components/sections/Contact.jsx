import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ps4omrl",   
        "template_fdlejsq",  
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        "WkIAYhjP5CB_Byzie"  
      )
      .then(
        () => {
          setStatus("✅ Message sent! Check your email for confirmation.");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error.text);
          setStatus(" Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact</h2>
      <div className="contact-wrapper">
        {/* Left: Contact Info */}
        <div className="contact-info">
          <h3>Contact me here</h3>
          <p>
            <strong>Based In:</strong> Ahmedabad Gujarat - 380001
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:ajaypariharn@gmail.com">ajaypariharn@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+919173541990">+91 91735 41990</a>
          </p>
        </div>

        {/* Right: Contact Form */}
        <form className="contact-form" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>

        {status && <p className="status-message">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
