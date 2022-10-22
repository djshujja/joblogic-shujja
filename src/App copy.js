import "./App.css";

import * as React from "react";

import AppBar from "@mui/material/AppBar";
import BGImage from "./assets/Images/Header image/header.jpg";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "./logo.svg";

export default function App() {
  return (
    <Box
      sx={(theme) => ({
        background: "blue ",
        height: "100vh",
        position: "relative",
        zIndex: -1,
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          justifyContent: "space-between",
        })}
      >
        <Box
          sx={(theme) => ({
            width: "30%",
            height: "100vh",
            position: "sticky",
            top: 0,
          })}
        >
          <Typography>Sidebar</Typography>
        </Box>
        <Box
          sx={(theme) => ({
            width: "70%",
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "column",
            bgcolor: "green",
            color: "white",
          })}
        >
          <Typography>Hello World</Typography>
        </Box>
      </Box>

      {/* <Box
        sx={(theme) => ({
          bottom: 0,
          zIndex: 10,
          position: "absolute",
          background: "red",
          width: "100%",
          height: "65vh",
          "-webkit-box-shadow": "0px -18px 20px -4px rgba(0,0,0,0.75)",
          "-moz-box-shadow": "0px -18px 20px -4px rgba(0,0,0,0.75)",
          boxShadow: "0px -18px 20px -4px rgba(0,0,0,0.75)",
        })}
      ></Box> */}
    </Box>
  );
}
