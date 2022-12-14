import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import towTruck from "../towTruck.webp";

const CarImage = () => {
  return (
    <Grid container item xs={12} sm={12} md={12} lg={6} sx={{ justifyContent: "center" }}>
      <Box paddingY={1} paddingX={2} sx={{ display: "flex", justifyContent: "center" }}>
        <img src={towTruck} alt="Tow Truck with car" className="towTruck" />
      </Box>
    </Grid>
  );
};

export default CarImage;
