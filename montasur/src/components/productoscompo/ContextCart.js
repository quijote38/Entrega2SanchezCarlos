import { useState } from "react";
import { createContext } from "react";
import productos from "../../utils/products.js";


export const listaCartContext = createContext(null);

const ContextCart = ({children}) => {
  const [listCart, setListCart] = useState([]);

  const addProduct = (id) => {
    const productAdd = productos.find(product => product.id === id);
    
   
    const productToMain = listCart.filter(product => product.id !== id);

    let add = true;
    for (let product of listCart) {
      if (product.id === id) {
        let quantity = product.quantity;

        if (quantity < productAdd.stock) {
          const newQuantity = { ...product, quantity: quantity + 1 };
          setListCart([...productToMain, newQuantity]);
        }
        add = false;
        break;
      }
         

    }
    add && setListCart ( [...productToMain, {...productAdd, quantity: 1 } ] )
  };

  
  console.log(listCart)
  const clearCart = () => {
    setListCart ( [] )
  }
const remove = id => {
    const updateList = listCart.filter(product => product.id !== id);
    setListCart (updateList);
} 

  return <listaCartContext.Provider value={{remove, listCart, addProduct, clearCart}}>
       {children}
  </listaCartContext.Provider>;
};

export default ContextCart; //12:53
