import React from "react";
import { Title } from "../components/Title";
import { Unordered_list } from "../components/Unordered_list";
import Details from "../components/Details";

function About() {
  return (
    <div className="about" style={{textAlign: "center", padding: "20px", marginTop: "10px"}}>

      <h1 style={{color:"red", fontSize : 50}}>About Us</h1>
      <p style={{ color: "pink" }}>
        Welcome to our application! We are dedicated to providing the best user
        experience possible. Our team is committed to continuous improvement and
        innovation.
      </p>

      <div style={{ marginTop: "20px", color: "blue" }}>

        <Title /> {/* This line imports the Title component and renders it in the About component */}
        <Unordered_list /> {/* This line imports the Unordered_list component and renders it in the About component */}
        
      </div>
      <Details name = "Ronit" age = "12" contact = "7003447033"/>
    </div>
  );
}

export default About;
