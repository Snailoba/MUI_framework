import React from "react";
import { Box, Typography, Grid, Card } from "@mui/material";
const containerContent = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const paraLimit = {
  width: "50%",
};
const typeSet = {
  margin: "15px",
};
const containerCard = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};
const cardBody = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "50%",
};
const imageSize = {
  maxWidth: "auto",
  height: "140",
};
const cardText = {};
function Content() {
  return (
    <Grid sx={containerContent}>
      <Box sx={paraLimit}>
        <Typography variant="h4" sx={typeSet}>
          Welcome to My Movie
        </Typography>
        <Typography sx={typeSet}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique
          senectus et netus et malesuada fames ac. Sed sed risus pretium quam
          vulputate dignissim suspendisse in. Posuere ac ut consequat semper
          viverra. Est velit egestas dui id. Semper risus in hendrerit gravida
          rutrum quisque non. Maecenas volutpat blandit aliquam etiam erat velit
          scelerisque in dictum. Cursus risus at ultrices mi tempus imperdiet
          nulla. Sollicitudin ac orci phasellus egestas tellus rutrum tellus
          pellentesque eu. Pharetra magna ac placerat vestibulum lectus mauris.
          Feugiat nibh sed pulvinar proin gravida hendrerit. Duis ut diam quam
          nulla porttitor. Nulla at volutpat diam ut venenatis tellus in metus.
          Eget duis at tellus at urna.
        </Typography>
        <Typography sx={typeSet}>
          Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam.
          Eu volutpat odio facilisis mauris sit amet. Massa enim nec dui nunc
          mattis enim ut tellus. Eu consequat ac felis donec. Enim eu turpis
          egestas pretium aenean. Vitae congue eu consequat ac felis donec et
          odio pellentesque. Eu consequat ac felis donec et odio pellentesque.
          Eleifend donec pretium vulputate sapien. Neque volutpat ac tincidunt
          vitae semper quis lectus nulla. Proin libero nunc consequat interdum
          varius sit. Aliquam malesuada bibendum arcu vitae. Sed egestas egestas
          fringilla phasellus. Enim nulla aliquet porttitor lacus luctus
          accumsan. Diam volutpat commodo sed egestas egestas fringilla
          phasellus faucibus scelerisque. Egestas purus viverra accumsan in nisl
          nisi scelerisque eu. Arcu cursus euismod quis viverra. Vel quam
          elementum pulvinar etiam.
        </Typography>
      </Box>
      <Box sx={containerCard}>
        <Card sx={cardBody}>
          <img src="assets/nahida.jpg" style={imageSize} />
          <Typography variant="h5" sx={cardText}>
            Card title
          </Typography>
          <Typography sx={cardText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Tristique senectus et netus et malesuada fames ac. Sed sed risus
            pretium quam vulputate dignissim suspendisse in. Posuere ac ut
            consequat semper viverra. Est velit egestas dui id. Semper risus in
            hendrerit gravida rutrum quisque non. Maecenas volutpat blandit
            aliquam etiam erat velit scelerisque in dictum. Cursus risus at
            ultrices mi tempus imperdiet nulla. Sollicitudin ac orci phasellus
            egestas tellus rutrum tellus pellentesque eu. Pharetra magna ac
            placerat vestibulum lectus mauris. Feugiat nibh sed pulvinar proin
            gravida hendrerit. Duis ut diam quam nulla porttitor. Nulla at
            volutpat diam ut venenatis tellus in metus. Eget duis at tellus at
            urna.
          </Typography>
        </Card>
        <Card sx={cardBody}>
          <img src="assets/nahida.jpg" style={imageSize} />
          <Typography variant="h5" sx={cardText}>
            Card title
          </Typography>
          <Typography sx={cardText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Tristique senectus et netus et malesuada fames ac. Sed sed risus
            pretium quam vulputate dignissim suspendisse in. Posuere ac ut
            consequat semper viverra. Est velit egestas dui id. Semper risus in
            hendrerit gravida rutrum quisque non. Maecenas volutpat blandit
            aliquam etiam erat velit scelerisque in dictum. Cursus risus at
            ultrices mi tempus imperdiet nulla. Sollicitudin ac orci phasellus
            egestas tellus rutrum tellus pellentesque eu. Pharetra magna ac
            placerat vestibulum lectus mauris. Feugiat nibh sed pulvinar proin
            gravida hendrerit. Duis ut diam quam nulla porttitor. Nulla at
            volutpat diam ut venenatis tellus in metus. Eget duis at tellus at
            urna.
          </Typography>
        </Card>
        <Card sx={cardBody}>
          <img src="assets/nahida.jpg" style={imageSize} />
          <Typography variant="h5" sx={cardText}>
            Card title
          </Typography>
          <Typography sx={cardText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Tristique senectus et netus et malesuada fames ac. Sed sed risus
            pretium quam vulputate dignissim suspendisse in. Posuere ac ut
            consequat semper viverra. Est velit egestas dui id. Semper risus in
            hendrerit gravida rutrum quisque non. Maecenas volutpat blandit
            aliquam etiam erat velit scelerisque in dictum. Cursus risus at
            ultrices mi tempus imperdiet nulla. Sollicitudin ac orci phasellus
            egestas tellus rutrum tellus pellentesque eu. Pharetra magna ac
            placerat vestibulum lectus mauris. Feugiat nibh sed pulvinar proin
            gravida hendrerit. Duis ut diam quam nulla porttitor. Nulla at
            volutpat diam ut venenatis tellus in metus. Eget duis at tellus at
            urna.
          </Typography>
        </Card>
      </Box>
    </Grid>
  );
}

export default Content;
