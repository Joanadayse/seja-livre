import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import GlobalStyle from "./GlobalStyle";
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Carrinho";

function App() {
  return (
    <CartProvider>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/carrinho" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
