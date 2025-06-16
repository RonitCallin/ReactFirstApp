import React from "react";
import { Heading } from "../components/Heading";

function Contact() {
  return (
    <div className="contact" style={{ textAlign: "center", padding: "20px", marginTop: "30px" }}>
      <h1 style={{color:"red", fontSize: 50}}>Contact Us</h1>
      <p style={{ color: "yellow" }}>
        If you have any questions, concerns, or feedback, we would love to hear
        from you! Please reach out to us through the following channels:
      </p>

      <Heading name="Guide" />
      <Heading name="NODEJS Tutor" />
    </div>
  );
}

export default Contact;
