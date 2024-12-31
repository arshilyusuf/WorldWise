import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Pagenotfound from "./pages/Pagenotfound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";
import CountriesList from "./components/CountriesList";
import City from "./components/City";
import Form from "./components/Form";
function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const BASE_URL = "http://localhost:9000";

  useEffect(function () {
    async function fetchCities() {
      try {
        setisLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (err) {
        alert("Error loading data...");
      }finally{
        setisLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="countries"
            element={<CountriesList cities={cities} isLoading={isLoading} />}
          ></Route>
          <Route 
          path = "cities/:id" 
          element={<City/>}
          >
          </Route>
          <Route path="form" element={<Form/>}></Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
