import "@fontsource/roboto/500.css";
import Header from "./components/Header";
import WeWillBuyYourCar from "./components/WeWillBuyYourCar";
import CarImage from "./components/CarImage";
import Grid from "@mui/material/Grid";
import CashOnHand from "./components/CashOnHand";

import "./App.css";
import MainInfo from "./components/MainInfo";

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
        <Grid>
          <MainInfo />
          <CashOnHand />
        </Grid>
      </section>
    </div>
  );
}

export default App;
