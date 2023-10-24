import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Connect with me...</h2>
      <div className="social-icons">
        <a
          href="https://github.com/tflannagan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://twitter.com/o_igniculus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/o_igniculus/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://soundcloud.com/igniculus_o"
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
