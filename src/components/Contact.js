import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Connect with me...</h2>
      <div className="social-icons">
        <a
          href="https://www.facebook.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.soundcloud.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-soundcloud"></i>
        </a>
        {/* Add more icons as needed */}
      </div>
    </section>
  );
}

export default Contact;
