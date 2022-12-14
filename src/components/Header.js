import React from "react";

import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CallIcon from "@mui/icons-material/Call";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { theme } from "../theme";

const Header = () => {
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;

  return (
    <Grid
      container
      sx={{ color: primaryColor, my: 3, px: 3, justifyContent: "space-between" }}
    >
      <Grid item sm="auto" md="auto" lg="auto" xs={12} marginBottom={2}>
        <Box
          paddingY={1}
          paddingX={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            border: `2px solid${secondaryColor}`,
            borderRadius: "50px",
          }}
        >
          <DirectionsCarIcon sx={{ fontSize: 40 }} />
          <Typography marginLeft={1} marginTop={0.85} variant="h2" component="h1">
            Auto Skup Łódź
          </Typography>
        </Box>
      </Grid>
      <Grid item sm="auto" md="auto" lg="auto" xs={12}>
        <Box
          paddingY={1}
          paddingX={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            border: `2px solid${secondaryColor}`,
            borderRadius: "50px",
          }}
        >
          <CallIcon sx={{ fontSize: 40 }} />
          <Typography marginLeft={1} marginTop={0.85} variant="h2" component="h2">
            123-456-789
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
