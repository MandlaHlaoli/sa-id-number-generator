import "./styles/styles.css";
import React, { useState } from "react";
import NavBar from "../src/components/NavBar";
import Footer from "./components/Footer";

function App() {
  const [generatedId, setGeneratedId] = useState(""); // State to hold the generated ID

  const generateIdNumber = () => {
    const dob = document.getElementById("dob").value; // Get Date of Birth
    const gender = document.getElementById("gender").value; // Get Gender
    const citizenship = document.getElementById("citizenship").value; // Get Citizenship

    if (!dob || !gender || !citizenship) {
      alert("Please fill in all fields.");
      return;
    }

    const idNumber = createValidIdNumber(dob, gender, citizenship);

    setGeneratedId(idNumber); // Set the valid generated ID number in the state
  };

  const createValidIdNumber = (dob, gender, citizenship) => {
    const year = dob.substring(2, 4); // Last two digits of the year
    const month = dob.substring(5, 7); // Two digits for the month
    const day = dob.substring(8, 10); // Two digits for the day

    // Generate a random 4-digit sequence for gender (0000-4999 for female, 5000-9999 for male)
    const randomGenderSeq = Math.floor(
      Math.random() * 5000 + (gender === "male" ? 5000 : 0)
    )
      .toString()
      .padStart(4, "0");

    // Citizen Indicator: 0 for SA citizen, 1 for permanent resident
    const citizenIndicator = citizenship === "sa" ? "0" : "1";

    // Generate a random 2-digit sequence for the race (not commonly used now, but part of the ID format)
    const randomRaceSeq = Math.floor(Math.random() * 100)
      .toString()
      .padStart(2, "0");

    // Combine all parts into the ID number without the checksum
    const partialIdNumber = `${year}${month}${day}${randomGenderSeq}${citizenIndicator}${randomRaceSeq}`;

    // Add checksum to the ID number
    const checkDigit = calculateCheckSum(partialIdNumber);

    // Full valid ID number
    return `${partialIdNumber}${checkDigit}`;
  };

  const calculateCheckSum = (id) => {
    let sum = 0;
    let shouldDouble = false;

    for (let i = id.length - 1; i >= 0; --i) {
      let digit = parseInt(id.charAt(i), 10);

      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit = (digit % 10) + 1;
        }
      }
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    return (sum * 9) % 10;
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <h1>South African ID Number Generator</h1>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth (YYYY-MM-DD)</label>
          <input type="date" id="dob" name="dob" className="input-field" />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" className="input-field">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="citizenship">Citizenship</label>
          <select id="citizenship" name="citizenship" className="input-field">
            <option value="sa">South African Citizen</option>
            <option value="permanent">Permanent Resident</option>
          </select>
        </div>

        <button className="generate-btn" onClick={generateIdNumber}>
          Generate ID
        </button>

        <div className="id-output">
          <h2>Generated ID Number:</h2>
          <p id="idNumber">{generatedId || "[ID Number will appear here]"}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
