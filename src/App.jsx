import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import LoginSignup from "./pages/LoginSignup";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Footer from "./Component/Footer/Footer";
import men_banner from "./assets/banner.jpg";
import women_banner from "./assets/women_banner.avif";
import kid_banner from "./assets/kids_banner.jpg";
import "../src/App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kid"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
