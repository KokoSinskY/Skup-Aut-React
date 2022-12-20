import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import towTruck from "../towTruck.webp";

const TowTruckImage = () => {
  return (
    <Grid container item xs={12} sm={12} md={12} lg={6} sx={{ justifyContent: "center" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img src={towTruck} alt="Tow Truck with car" className="car" />
      </Box>
    </Grid>
  );
};

export default TowTruckImage;
