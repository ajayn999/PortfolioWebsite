import React from "react";

const Contact = () => {
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
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
