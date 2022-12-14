import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { theme } from "../theme";

const WeWillBuyYourCar = () => {
  const secondaryColor = theme.palette.secondary.main;
  return (
    <Grid container item xs={12} sm={12} md={12} lg={6} sx={{ justifyContent: "center" }}>
      <Box
        paddingY={1}
        paddingX={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          "@media (max-width:600px)": {
            paddingY: 6,
            lineHeight: 1.5,
          },
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="big" component="h1" color="primary">
          KUPIMY TWÓJ SAMOCHÓD!
        </Typography>
        <Button
          variant="outlined"
          size="large"
          sx={{
            border: `2px solid${secondaryColor}`,
            borderRadius: "50px",
            backgroundColor: secondaryColor,
            "&:hover": {
              border: `2px solid${secondaryColor}`,
            },
          }}
        >
          Czytaj więcej
        </Button>
      </Box>
    </Grid>
  );
};
export default WeWillBuyYourCar;
