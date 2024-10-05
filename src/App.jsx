import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/home";
import HotelsList from "./Pages/HotelsList/HotelsList";
import Hotel from "./Pages/Hotel/Hotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hotelsList" element={<HotelsList/>} />
        <Route path="/hotelsList/:id" element={<Hotel/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
