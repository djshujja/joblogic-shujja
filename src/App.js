import "./App.css";

import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Data from "./constants/EmployeeData.json";
import InfoCard from "./components/UI/InfoCard";
import Sidebar from "./components/UI/Sidebar";

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [selected, setSelected] = useState(0);

  useEffect(() => setEmployees(Data.employees), []);

  return (
    <Box
      sx={(theme) => ({
        minHeight: "100vh",
        height: "100%",
        zIndex: -1,
        background:
          "linear-gradient(to bottom, transparent 25%, #2e2e36 35%), url('https://iili.io/DKxHyF.jpg')",
        backgroundSize: "cover",
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "100vh",
        })}
      >
        <Box
          sx={(theme) => ({
            width: "25%",
            background: "rgba(0, 0, 0, 0.3)",
            minHeight: "100%",
          })}
        >
          <Sidebar
            employees={employees}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>
        <Box
          sx={(theme) => ({
            width: "75%",
            minHeight: "100vh",
          })}
        >
          <InfoCard selected={employees[selected]} />
        </Box>
      </Box>
    </Box>
  );
}
