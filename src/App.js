import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./layouts/Header/Header.js";
import Footer from "./layouts/Footer/Footer.js";
import HomeView from "./views/HomeView/HomeView";
import Services from "./views/ServicesView/ServicesView.js";
import Contacts from "./views/ContactsView/ContactsView.js";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeView />} />
          <Route exact path="/Services" element={<Services />} />
          <Route exact path="/Contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
