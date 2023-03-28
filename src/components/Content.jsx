import React from "react";
import { Box, Typography, Grid, Card } from "@mui/material";

const tent = {
  direction: "column",
  justifyContent: "flex-start",
  alignItems: "center",
};
const typeSet = {
  margin: "15px",
};
const containerCard = {
  direction: "row",
  alignItems: "center",
};
const imageSize = {
  width: "100%",
  height: 140,
};

function Content() {
  return (
    <Grid sx={tent} container>
      <Grid item>
        <Box spacing={4}>
          <Typography variant="h4" sx={typeSet}>
            Welcome to My Movie
          </Typography>
          <Typography sx={typeSet}>
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
          <Typography sx={typeSet}>
            Odio ut enim blandit volutpat maecenas volutpat blandit aliquam
            etiam. Eu volutpat odio facilisis mauris sit amet. Massa enim nec
            dui nunc mattis enim ut tellus. Eu consequat ac felis donec. Enim eu
            turpis egestas pretium aenean. Vitae congue eu consequat ac felis
            donec et odio pellentesque. Eu consequat ac felis donec et odio
            pellentesque. Eleifend donec pretium vulputate sapien. Neque
            volutpat ac tincidunt vitae semper quis lectus nulla. Proin libero
            nunc consequat interdum varius sit. Aliquam malesuada bibendum arcu
            vitae. Sed egestas egestas fringilla phasellus. Enim nulla aliquet
            porttitor lacus luctus accumsan. Diam volutpat commodo sed egestas
            egestas fringilla phasellus faucibus scelerisque. Egestas purus
            viverra accumsan in nisl nisi scelerisque eu. Arcu cursus euismod
            quis viverra. Vel quam elementum pulvinar etiam.
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <Grid sx={containerCard} container spacing={2}>
          <Grid item sm={6} md={6}>
            <Card>
              <img
                src="assets/alhaitham.jpg"
                style={imageSize}
                object-fit="cover"
              />
              <Typography variant="h5">Card Title</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <img
                src="assets/alhaitham.jpg"
                style={imageSize}
                object-fit="cover"
              />
              <Typography variant="h5">Card Title</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <img
                src="assets/alhaitham.jpg"
                style={imageSize}
                object-fit="cover"
              />
              <Typography variant="h5">Card Title</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Content;
