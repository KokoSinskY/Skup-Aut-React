import "@fontsource/roboto/500.css";
import Header from "./components/Header";
import WeWillBuyYourCar from "./components/WeWillBuyYourCar";
import TowTruckImage from "./components/TowTruckImage";
import CarImage from "./components/CarImage";
import Grid from "@mui/material/Grid";
import CashOnHand from "./components/CashOnHand";

import MainInfo from "./components/MainInfo";
import "./App.css";
import ListOfCarsWeBuy from "./components/ListOfCarsWeBuy";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <Grid container>
          <WeWillBuyYourCar />
          <TowTruckImage />
        </Grid>
      </section>
      <section>
        <Grid container>
          <MainInfo />
          <CashOnHand />
        </Grid>
      </section>
      <section>
        <Grid container>
          <CarImage />
          <ListOfCarsWeBuy />
        </Grid>
      </section>
    </div>
  );
}

export default App;
