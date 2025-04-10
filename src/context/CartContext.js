import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

 const addToCart = (product, quantity = 1, size = "") => {
   const updatedCart = [...cart];
   const existingIndex = updatedCart.findIndex(
     (item) => item.id === product.id && item.size === size
   );

   if (existingIndex !== -1) {
     // Se já existe mesmo produto + tamanho, somamos a quantidade
     updatedCart[existingIndex].quantity += quantity;
   } else {
     // Adiciona novo item com tamanho e quantidade
     updatedCart.push({ ...product, quantity, size });
   }

   setCart(updatedCart);
 };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

    const clearCart = () => {
      setCart([]);
    };

  return (
    <CartContext.Provider value={{ cart, addToCart,clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
