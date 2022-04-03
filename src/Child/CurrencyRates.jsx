import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CContainer,
  CBadge,
  CTable,
  CTableHead,
  CTableBody,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
} from "@coreui/react";

export function CurrencyRates(props) {
  const { rates } = props;

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
      <CBadge
        style={{
          color: "blue",
          align: "center",
          fontWeight: "bold",
          fontSize: "2rem",
          marginBottom: "1rem",
        }}
      >
        Currency Rates
      </CBadge>

      <CContainer
        style={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "5px",
          backgroundColor: "#f2f2f2",
          padding: "30px",
          boxShadow: "0px 0px 5px #000000",
          marginTop: "10px",
          textAlign: "center",
        }}
      >
        <CTable border="bordered" width={"500px"}>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>Currency</CTableHeaderCell>
              <CTableHeaderCell>Rate</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {Object.keys(rates).map((key) => (
              <CTableRow key={key}>
                <CTableDataCell>{key}</CTableDataCell>
                <CTableDataCell>{rates[key]}</CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CContainer>
    </CContainer>
  );
}
