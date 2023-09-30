import { ItemsProvider } from "./context/ItemsContext.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage.jsx";
import AboutPage from "./views/AboutPage/AboutPage.jsx";
import CartPage from "./views/CartPage/CartPage.jsx";
import CategoryPage from "./views/CategoryPage/CategoryPage.jsx";
import ContactPage from "./views/ContactPage/ContactPage.jsx";
import DetailPage from "./views/DetailPage/DetailPage.jsx";
import ShopPage from "./views/ShopPage/ShopPage.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import PaymentPage from "./views/PaymentPage/PaymentPage.jsx";
import "./App.css";

const App = () => {
  return (
    <ItemsProvider>
      <Router  >
        <div className="container-app">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/item/:id" element={<DetailPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/checkout" element={<CartPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ItemsProvider>
  );
};

export default App;
