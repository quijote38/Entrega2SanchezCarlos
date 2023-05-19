import { createContext, useState } from "react";

export const constrollerShowCart = createContext(null);

const CartContexts = ({ children }) => {
  const [cartShow, setCartShow] = useState("none");

  return (
    <constrollerShowCart.Provider value={{ cartShow, setCartShow }}>
      {children}
    </constrollerShowCart.Provider>
  );
};

export default CartContexts;
