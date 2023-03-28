import React from "react";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";

const right = {
  display: { xs: "none", md: "flex" },
  flexDirection: "column",
};
const spacing = { mb: 2 };
const imageSize = { width: 250 };

function Rightbar() {
  return (
    <Box sx={right}>
      <Typography sx={spacing}>Latest Photos</Typography>
      <ImageList sx={imageSize} cols={2}>
        <ImageListItem>
          <img src="assets/nilou.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="assets/nilou.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="assets/nilou.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="assets/nilou.jpg" />
        </ImageListItem>
      </ImageList>
    </Box>
  );
}
export default Rightbar;
