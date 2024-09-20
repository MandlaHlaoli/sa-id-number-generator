import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SAIDExplanation from "./components/SAIDExplanation";
import About from "./components/About";
import BarcodeComponent from "./components/BarCode";
import { initGA, logPageView } from "./analytics";
import "./styles/NavBar.css";
import "./styles/GeneralStyles.css";
import "./styles/Form.css";
import "./styles/Button.css";
import { createValidIdNumber } from "./helpers/idGenerator"; // Move helper function to separate file

function App() {
  const [generatedId, setGeneratedId] = useState("");

  useEffect(() => {
    initGA();
    logPageView();
    window.addEventListener("popstate", logPageView);
    return () => window.removeEventListener("popstate", logPageView);
  }, []);

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

  return (
    <div>
      <NavBar />
      <About />
      <div className="container">
        <h1>South African ID Number Generator</h1>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth (DD-MM-YYYY)</label>
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
          <BarcodeComponent barcode={generatedId} />
        </div>

        <SAIDExplanation />
      </div>
      <Footer />
    </div>
  );
}

export default App;
