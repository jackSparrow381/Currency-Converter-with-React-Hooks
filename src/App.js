import React, { useState } from "react";
import { CurrencyConverterForm } from "./Child/CurrencyConverterForm";
import { CurrencyRates } from "./Child/CurrencyRates";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./Child/NavBar";

export function App() {
  const [rates, setRates] = useState([]);

  return (
    <Router>
      <NavBar setRates={setRates} rates={rates} />
      <Routes>
        <Route path="/" element={<CurrencyConverterForm rates={rates} />} />
        <Route path="rate" element={<CurrencyRates rates={rates} />} />
      </Routes>
    </Router>
  );
}
