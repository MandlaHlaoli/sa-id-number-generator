import React from "react";
import "../styles/SAIDExplanation.css";

function SAIDExplanation() {
  return (
    <section className="id-explanation">
      <h2>Understanding the South African ID Number</h2>
      <p>
        The South African ID number is a 13-digit number that uniquely
        identifies citizens and permanent residents. It consists of several key
        components:
      </p>
      <ul>
        <li>
          <strong>Date of Birth (DOB):</strong> The first 6 digits represent the
          individual's date of birth in YYMMDD format.
        </li>
        <li>
          <strong>Gender Indicator:</strong> The next 4 digits indicate gender.
          A number from 0000 to 4999 signifies female, while 5000 to 9999
          signifies male.
        </li>
        <li>
          <strong>Citizenship Status:</strong> The 11th digit indicates
          citizenship. A "0" represents a South African citizen, while a "1"
          indicates a permanent resident.
        </li>
        <li>
          <strong>Check Digit:</strong> The last digit is a checksum used to
          validate the ID number. This is calculated using the{" "}
          <a
            href="https://en.wikipedia.org/wiki/Luhn_algorithm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Luhn algorithm
          </a>
          , which helps verify the accuracy of the number.
        </li>
      </ul>
      <p>
        This app uses the correct format, including the Luhn algorithm, to
        generate valid South African ID numbers based on the user's inputs.
      </p>
    </section>
  );
}

export default SAIDExplanation;
