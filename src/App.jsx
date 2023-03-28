import { useState } from "react";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import { Grid, Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Nav />
      <Container>
        <Grid container spacing={2} pt={2}>
          <Grid item md={3}>
            <Sidebar />
          </Grid>
          <Grid item md={6}>
            <Content />
          </Grid>
          <Grid item md={3}>
            <Rightbar />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
