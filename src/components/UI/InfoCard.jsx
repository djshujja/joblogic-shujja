import { Box, Slider, Typography, styled } from "@mui/material";

import React from "react";
import img from "../../assets/Images/Profile pics/Vito Corleone.jpg";

export default function InfoCard({ selected }) {
  const PopularitySlider = styled(Slider)({
    color: "#000",
    height: 2,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "-webkit-box-shadow": " 2px 4px 30px 0px rgba(0,0,0,0.75)",
      "-moz-box-shadow": " 2px 4px 30px 0px rgba(0,0,0,0.75)",
      boxShadow: " 2px 4px 30px 0px rgba(0,0,0,0.75)",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {},
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "#52af77",
      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&:before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
  });
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        justifyContent: "center",
        columnGap: "55px",
        mx: 10,
        mt: 15,
        alignItems: "stretch",
        color: "#fff",
      })}
    >
      <Box
        sx={(theme) => ({
          width: "25%",
          display: "flex",
          height: "100%",
          mt: 10,
          justifyContent: "flex-end",
        })}
      >
        <img alt={selected?.name} src={img} width={"180px"} height={"180px"} />
      </Box>
      <Box
        sx={(theme) => ({
          width: "75%",
        })}
      >
        <Box>
          <Typography
            sx={(theme) => ({
              my: 5,
              fontSize: "34px",
              fontWeight: "300",
            })}
          >
            {selected?.name}
          </Typography>
          <Box
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              columnGap: "25px",
              mb: 5,
            })}
          >
            <Typography>Popularity</Typography>
            <PopularitySlider
              aria-label="Popularity"
              defaultValue={0}
              value={selected?.popularity * 10}
            />
          </Box>
          <Box
            sx={(theme) => ({
              p: 2,
              borderRadius: 1,
              bgcolor: "#1a1d24",
            })}
          >
            <Typography
              component={"h2"}
              sx={(theme) => ({
                fontSize: "24px",
              })}
            >
              Biography
            </Typography>
            <Typography
              sx={(theme) => ({
                fontWeight: "300",
              })}
            >
              {selected?.biography}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
