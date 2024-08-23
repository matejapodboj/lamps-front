import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppContext, GlobalContextProvider } from "./GlobalContext";
import Product from "./Product";
import IntroPage from "./IntroPage";
import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";
import ContactPage from "./ContactPage";
import FaqPage from "./FaqPage";
import AboutUs from "./AboutUs";
import ReturnPolicy from "./ReturnPolicy";
import Delivery from "./Delivery";
import TermsAndConditions from "./TermsAndConditions";
import Cart from "./Cart";

function App() {
  return (
    <GlobalContextProvider>
      <RoutesWrap />
    </GlobalContextProvider>
  );
}


const RoutesWrap = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {<Route path="/" element={<IntroPage />} />}
        {<Route path="/products" element={<Landing />} />}
        {<Route path="/products/:id" element={<Product />} />}
        {<Route path="/cart" element={<Cart />} />}
        {<Route path="/about" element={<AboutUs />} />}
        {<Route path="/contact" element={<ContactPage />} />}
        {<Route path="/faq" element={<FaqPage />} />}
        {<Route path="/return-policy" element={<ReturnPolicy />} />}
        {<Route path="/delivery" element={<Delivery />} />}
        {<Route path="/terms-and-conditions" element={<TermsAndConditions />} />}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
