import "@fontsource/roboto/500.css";
import Header from "./components/Header";
import WeWillBuyYourCar from "./components/WeWillBuyYourCar";
import CarImage from "./components/CarImage";
import Grid from "@mui/material/Grid";
import CashOnHand from "./components/CashOnHand";

import MainInfo from "./components/MainInfo";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <Grid container>
          <WeWillBuyYourCar />
          <CarImage />
        </Grid>
      </section>
      <section>
        <Grid container>
          <MainInfo />
          <CashOnHand />
        </Grid>
      </section>
    </div>
  );
}

export default App;
