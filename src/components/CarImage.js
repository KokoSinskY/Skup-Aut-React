import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import car from "../car.webp";

const CarImage = () => {
  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={12}
      lg={6}
      sx={{ justifyContent: "center", mt: 2 }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img src={car} alt="Car" className="car" />
      </Box>
    </Grid>
  );
};

export default CarImage;
