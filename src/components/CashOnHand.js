import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { theme } from "../theme";

const CashOnHand = () => {
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;
  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={12}
      lg={6}
      sx={{
        justifyContent: "center",
        color: primaryColor,
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <Box
        paddingY={1}
        paddingX={3}
        sx={{
          border: `2px solid${secondaryColor}`,
          borderRadius: "50px",
          height: "fit-content",
        }}
      >
        <Typography variant="h1" component="h2">
          GOTÓWKA OD RĘKI
        </Typography>
      </Box>
    </Grid>
  );
};

export default CashOnHand;
