import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h1>About SA ID Generator</h1>
        <p>
          Welcome to the SA ID Generator, your go-to tool for creating valid
          South African ID numbers. Our app is designed to simplify the process
          of generating ID numbers for various purposes, ensuring they conform
          to the official format and validation rules.
        </p>
        <p>
          <strong>Key Features:</strong>
        </p>
        <ul>
          <li>Generate valid South African ID numbers based on user input</li>
          <li>Easy-to-use interface with clear instructions</li>
          <li>Built-in validation to ensure the ID numbers are accurate</li>
          <li>Secure and reliable with data privacy in mind</li>
        </ul>
        <p>
          <strong>How It Works:</strong>
        </p>
        <p>
          Simply enter your date of birth, select your gender, and choose your
          citizenship status. The app will generate a valid ID number that
          adheres to South African standards. Perfect for testing, learning, or
          just for curiosity!
        </p>
        <p>
          We are committed to providing a seamless experience and helping you
          understand and generate valid ID numbers with ease.
        </p>
      </div>
    </section>
  );
}

export default About;
