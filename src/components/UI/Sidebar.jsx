import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import React from "react";
import logo from "../../the-godfather.svg";

export default function Sidebar({ employees, selected, setSelected }) {
  return (
    <Box
      sx={(theme) => ({
        minHeight: "100vh",
        mt: 10,
        position: "static",
        overflow: "hidden",
      })}
    >
      <Box
        sx={(theme) => ({
          width: "100%",
        })}
      >
        <img
          src={logo}
          alt={"The Godfather Logo"}
          style={{ display: "block", margin: "auto" }}
        />
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
            <ListItem
              key={index}
              disablePadding
              onClick={(_) => setSelected(index)}
            >
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
                            ? "30px !important"
                            : emp?.popularity === 4
                            ? "26px"
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
  );
}
