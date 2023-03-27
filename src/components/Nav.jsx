import React from "react";
import { AppBar, Typography, Box } from "@mui/material";
const boundaries = {
  margin: "50px",
};
const containerNav = {
  background: "#20232a",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};
const title = {
  fontFamily: "Courier New",
  fontSize: "25px",
  paddingLeft: "15px",
};
const triplet = {
  listStyle: "none",
  padding: "0",
  margin: "0",
};
const hori = {
  display: "inline-block",
  marginRight: "10px",
  fontFamily: "Courier New",
  fontSize: "15px",
};
function Nav() {
  return (
    <Box sx={boundaries}>
      <AppBar sx={containerNav}>
        <Typography sx={title}>My Movie</Typography>
        <ul style={triplet}>
          <li style={hori}>HOME</li>
          <li style={hori}>ABOUT</li>
          <li style={hori}>CONTACT</li>
        </ul>
      </AppBar>
    </Box>
  );
}

export default Nav;
