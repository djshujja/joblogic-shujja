import "./App.css";

import React, { useEffect, useState } from "react";

import AppBar from "@mui/material/AppBar";
import BGImage from "./assets/Images/Header image/header.jpg";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Data from "./constants/EmployeeData.json";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import { ReactComponent as Logo } from "./assets/Images/the-godfather.svg";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "./the-godfather.svg";
import { styled } from "@mui/material";

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [selected, setSelected] = useState(0);

  const getFontSize = (popularity) => {
    console.log("getting popularity", popularity);
    switch (popularity) {
      case 5:
        return "22px";
      case 4:
        return "20px";
      case 3:
        return "18px";
      case 2:
        return "16px";
      default:
        return "14px";
    }
  };

  useEffect(() => setEmployees(Data.employees), []);

  const EmployeeText = styled(ListItemText)(({ theme }, index, popularity) => ({
    fontSize: getFontSize(popularity),
    color: index % 2 === 0 ? "#3db8db" : "#fff",
    fontWeight: "900",
  }));

  return (
    <Box
      sx={(theme) => ({
        background: "green",
        height: "100vh",
        zIndex: -1,
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
            width: "20%",
            background: "rgba(0, 0, 0, 0.3)",
            minHeight: "100vh",
          })}
        >
          <Box
            sx={(theme) => ({
              my: 2,
            })}
          >
            <Box
              sx={(theme) => ({
                mt: 10,
                width: "100%",
              })}
            >
              <img src={logo} style={{ display: "block", margin: "auto" }} />
            </Box>
            <Box
              sx={(theme) => ({
                mt: 10,
              })}
            >
              <List
                sx={{
                  width: "100%",
                }}
                dense={true}
                disablePadding={true}
              >
                {employees.map((emp, index) => (
                  <ListItem active onClick={(_) => setSelected(index)}>
                    <ListItemButton
                      selected={index === selected}
                      sx={(theme) => ({
                        "&.Mui-selected": {
                          background: "rgba(64,65,70,255)",
                        },
                      })}
                      fullWidth
                    >
                      <ListItemText
                        primary={
                          <Typography
                            sx={(theme) => ({
                              fontSize:
                                emp?.popularity === 5
                                  ? "28px !important"
                                  : emp?.popularity === 4
                                  ? "20px"
                                  : emp?.popularity === 3
                                  ? "18px"
                                  : emp?.popularity === 2
                                  ? "16px"
                                  : "14px",
                              color: index % 2 === 0 ? "#3db8db" : "#fff",
                              fontWeight: "400",
                              textAlign: "center",
                            })}
                          >
                            {emp.name}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Box>
        <Box
          sx={(theme) => ({
            width: "80%",
          })}
        ></Box>
      </Box>
    </Box>
  );
}
