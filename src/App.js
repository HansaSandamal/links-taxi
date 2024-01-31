import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./layouts/Header/Header.js";
import Footer from "./layouts/Footer/Footer.js";
import HomeView from "./views/HomeView/HomeView";
import Services from "./views/ServicesView/ServicesView.js";
import Contacts from "./views/ContactsView/ContactsView.js";
import AirportTransfersView from "./views/AirportTransfersView/AirportTransfersView.js";
import LongDistanceView from "./views/LongDistanceView/LongDistanceView.js";
import DayToursView from "./views/DayToursView/DayToursView.js";
import CityToursView from "./views/CityToursView/CityToursView.js";
import SafariView from "./views/SafariView/SafariView.js";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="service/airport" element={<AirportTransfersView />}/>
          <Route path="/service/long" element={<LongDistanceView />} />
          <Route path="/service/day" element={<DayToursView/>} />
          <Route path="/service/city" element={<CityToursView/>} />
          <Route path="/service/safari" element={<SafariView/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
