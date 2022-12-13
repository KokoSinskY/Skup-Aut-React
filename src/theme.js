import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#e3f2fd",
    },
    secondary: {
      main: "#ff884d",
    },
  },
  typography: {
    h1: {
      fontSize: "2em",
    },
    h2: {
      fontSize: "1.5em",
    },
    h3: {
      fontSize: "1.17em",
    },
    h4: {
      fontSize: "1em",
    },
    h5: {
      fontSize: "0.83em",
    },
    h6: {
      fontSize: "0.67em",
    },
    big: {
      fontSize: "6em",
      "@media (max-width:600px)": {
        fontSize: "3.2em",
      },
    },
  },
});
