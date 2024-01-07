import './App.css';
import { Route, BrowserRouter, Routes} from "react-router-dom";
import HomeView from './views/HomeView/HomeView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeView/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
