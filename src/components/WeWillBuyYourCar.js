import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { theme } from "../theme";

const WeWillBuyYourCar = () => {
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;
  return (
    <Grid container xs={12} sm={12} md={12} lg={6} sx={{ color: primaryColor }}>
      <Box
        paddingY={1}
        paddingX={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          "@media (max-width:600px)": {
            paddingY: 6,
            lineHeight: 1.5,
          },
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="big" component="h1">
          KUPIMY TWÓJ SAMOCHÓD!
        </Typography>
      </Box>
    </Grid>
  );
};
export default WeWillBuyYourCar;
