import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./layouts/Header/Header.js";
import Footer from "./layouts/Footer/Footer.js";
import HomeView from "./views/HomeView/HomeView";
import Services from "./views/ServicesView/ServicesView.js";
import Contacts from "./views/ContactsView/ContactsView.js";
import TwoDayToursView from "./views/TwoDayToursView/TwoDayToursView.js";
import TwelveDayToursView from "./views/TwelveDayToursView/TwelveDayToursView.js";
import DayToursView from "./views/DayToursView/DayToursView.js";
import CityToursView from "./views/CityToursView/CityToursView.js";
import ThreeDayToursView from "./views/ThreeDayToursView/ThreeDayToursView.js";
import NineDayToursView from "./views/NineDayToursView/NineDayToursView.js";
import SevenDayToursView from "./views/SevenDayToursView/SevenDayToursView.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="service/two-day-tours" element={<TwoDayToursView />} />
          <Route path="service/nine-day-tours" element={<NineDayToursView />} />
          <Route
            path="/service/twelve-day-tours"
            element={<TwelveDayToursView />}
          />
          <Route path="/service/day-tours" element={<DayToursView />} />
          <Route path="/service/city-tours" element={<CityToursView />} />
          <Route
            path="/service/three-day-tours"
            element={<ThreeDayToursView />}
          />
          <Route
            path="/service/seven-day-tours"
            element={<SevenDayToursView />}
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
