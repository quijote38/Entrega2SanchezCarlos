import { useContext } from "react";
import cartCard from "../../img/cart-card.svg"
import { listaCartContext } from "./ContextCart";

const BotonAgregar = ({id}) => {
  
  let {addProduct} = useContext(listaCartContext)
  
  return (
    <button id="agregarCarrito" onClick={() => addProduct(id) }>
      <img src= {cartCard} alt= "add"></img>
    </button>
  );
};

export default BotonAgregar;
