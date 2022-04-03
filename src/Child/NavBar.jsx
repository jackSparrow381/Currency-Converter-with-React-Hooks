import { useState, useEffect } from "react";
import React from "react";
import { CNav, CFormSelect } from "@coreui/react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function NavBar(props) {
  const { setRates, rates } = props;
  const [selectCurrency, setSelectCurrency] = useState("USD");
  const [showLink, setShowLink] = useState(true);

  const handleChange = (e) => {
    setSelectCurrency(e.target.value);
  };

  

  useEffect(() => {
    axios
      .get(
        `https://v6.exchangerate-api.com/v6/e333f08d7e1ff202d3749608/latest/${selectCurrency}`
      )
      .then((res) => {
        setRates(res.data.conversion_rates);
      });
  }, [selectCurrency]);

  return (
    <CNav style={{ backgroundColor: "#a8fff5", margin: "0px", padding: "5px" }}>
      <CFormSelect
        style={{
          padding: "5px",
          borderRadius: "3px",
          width: "150px",
          fontWeight: "bold",
          color: "#212529",
          cursor: "pointer",
        }}
        value={selectCurrency}
        onChange={handleChange}
      >
        <option value="">Select Currency</option>
        {Object.keys(rates).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </CFormSelect>

      {showLink ? (
        <Link
          to="/rate"
          style={{
            textDecoration: "none",
            padding: "3px",
            border: "1px solid #212529",
            borderRadius: "3px",
            width: "150px",
            fontWeight: "bold",
            color: "#212529",
            backgroundColor: "white",
            float: "right",
          }}
          onClick={() => setShowLink(false)}
        >
          Currency Rates
        </Link>
      ) : (
        <Link
          to="/"
          style={{
            textDecoration: "none",
            padding: "3px",
            border: "1px solid #212529",
            borderRadius: "3px",
            width: "150px",
            fontWeight: "bold",
            color: "#212529",
            backgroundColor: "white",
            float: "right",
          }}
          onClick={() => setShowLink(true)}
        >
          Currency Converter
        </Link>
      )}
    </CNav>
  );
}
