import React, { useState } from "react";
import NavBar from "../src/components/NavBar";
import Footer from "./components/Footer";
import SAIDExplanation from "./components/SAIDExplanation";
import "./styles/NavBar.css";
import "./styles/GeneralStyles.css";
import "./styles/Form.css";
import "./styles/Button.css";
import About from "./components/About";

function App() {
  const [generatedId, setGeneratedId] = useState("");

  const generateIdNumber = () => {
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const citizenship = document.getElementById("citizenship").value;

    if (!dob || !gender || !citizenship) {
      alert("Please fill in all fields.");
      return;
    }

    const idNumber = createValidIdNumber(dob, gender, citizenship);

    setGeneratedId(idNumber);
  };

  const createValidIdNumber = (dob, gender, citizenship) => {
    const year = dob.substring(2, 4);
    const month = dob.substring(5, 7);
    const day = dob.substring(8, 10);

    const randomGenderSeq = Math.floor(
      Math.random() * 5000 + (gender === "male" ? 5000 : 0)
    )
      .toString()
      .padStart(4, "0");

    const citizenIndicator = citizenship === "sa" ? "0" : "1";

    const randomRaceSeq = Math.floor(Math.random() * 100)
      .toString()
      .padStart(2, "0");

    const partialIdNumber = `${year}${month}${day}${randomGenderSeq}${citizenIndicator}${randomRaceSeq}`;

    const checkDigit = calculateCheckSum(partialIdNumber);

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
      <About />
      <div className="container">
        <h1>South African ID Number Generator</h1>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth (MM-DD-YYYY)</label>
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

        <SAIDExplanation />
      </div>
      <Footer />
    </div>
  );
}

export default App;
