import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import GlobalStyle from "./GlobalStyle";
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Carrinho";
import Sobre from "./pages/Sobre";
import Checkout from "./pages/Checkout";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <CartProvider>
      <ToastContainer />
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
