import React, { useEffect, useState } from "react";
import {
  CFormSelect,
  CContainer,
  CBadge,
  CForm,
  CFormInput,
  CFormLabel,
  CButton,
} from "@coreui/react";

export function CurrencyConverterForm(props) {
  const { rates } = props;
  const [inputData, setInputData] = useState("");
  const [baseCurrencyName, setBaseCurrencyName] = useState("");
  const [targetCurrencyName, setTargetCurrencyName] = useState("");
  const [baseCurrencyRate, setBaseCurrencyRate] = useState("");
  const [targetCurrencyRate, setTargetCurrencyRate] = useState("");
  const [result, setResult] = useState("");

  const currencies = Object.keys(rates);

  const handleChangeBaseCurrency = (e) => {
    setBaseCurrencyName(e.target.value);
    setBaseCurrencyRate(rates[e.target.value]);
  };

  const handleChangeTargetCurrency = (e) => {
    setTargetCurrencyName(e.target.value);
    setTargetCurrencyRate(rates[e.target.value]);
  };

  const handleConvert = () => {
    setResult((inputData / baseCurrencyRate) * targetCurrencyRate);
  };

  return (
    <CContainer
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <CContainer
        style={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "5px",
          backgroundColor: "#f2f2f2",
          padding: "30px",
          boxShadow: "0px 0px 5px #000000",
          marginTop: "100px",
        }}
      >
        <CBadge
          style={{
            color: "blue",
            align: "center",
            fontWeight: "bold",
            fontSize: "2rem",
            marginBottom: "1rem",
          }}
        >
          Currency Converter
        </CBadge>

        <CForm
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <CContainer
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "15px",
              marginRight: "10px",
            }}
          >
            <CFormLabel
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                marginRight: "10px",
              }}
              htmlFor=""
            >
              Amount:
            </CFormLabel>
            <CFormInput
              style={{
                width: "200px",
                border: "1px solid black",
                borderRadius: "3px",
                marginRight: "10px",
              }}
              type="number"
              value={inputData}
              onChange={(e) => {
                setInputData(e.target.value);
              }}
            />
          </CContainer>
          <CContainer>
            <CFormSelect
              style={{
                padding: "5px",
                border: "1px solid black",
                borderRadius: "3px",
                size: "sm",
                width: "300px",
                fontWeight: "bold",
                color: "#212529",
                marginBottom: "0.5rem",
              }}
              value={baseCurrencyName}
              onChange={handleChangeBaseCurrency}
            >
              <option>Base Currency</option>
              {currencies.map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </CFormSelect>
          </CContainer>

          <CContainer>
            <CFormSelect
              style={{
                padding: "5px",
                border: "1px solid black",
                borderRadius: "3px",
                size: "sm",
                width: "300px",
                fontWeight: "bold",
                color: "#212529",
                marginBottom: "0.5rem",
              }}
              value={targetCurrencyName}
              onChange={handleChangeTargetCurrency}
            >
              <option value="TARGETCURRENCY">Target Currency</option>
              {currencies.map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </CFormSelect>
          </CContainer>

          <CContainer
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              marginRight: "10px",
              padding: "10px",
            }}
            htmlFor=""
          >
            Result: {result}
          </CContainer>

          <CButton
            style={{
              backgroundColor: "#4caf50",
              border: "1px solid #4caf50",
              color: "white",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              marginRight: "10px",
              cursor: "pointer",
              borderRadius: "3px",
              padding: "5px",
            }}
            onClick={handleConvert}
          >
            Convert
          </CButton>
        </CForm>
      </CContainer>
    </CContainer>
  );
}
