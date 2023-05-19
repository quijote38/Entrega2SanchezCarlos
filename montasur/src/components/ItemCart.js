import { useContext } from "react";
import deleteW from "../img/deleteW.svg"
import "../style/itemCart.css"
import { listaCartContext } from "./productoscompo/ContextCart";

const ItemCart = ({id, title, price, quantity, image}) => {
 
const { remove } = useContext(listaCartContext)

  return (
    <div className="itemCart">
      <div className="img">
        <img src={image} alt="img" />     
        {/* //OJOO EL CAMBIO image */}
      </div>

      <div className="description-cantidad">
        <span className="title"> {title} </span>
        <span className="quantity"> {`cantidad: ${quantity}`} </span>
      </div>

      <div className="price">
        <span className="subtotal"> subtotal</span>
        <span className="price"> ${quantity * price} </span>
      </div>

      <button className="delete" onClick={ () => remove(id) } >
        <img src={deleteW} />
      </button>

    </div>
  );
};

export default ItemCart;
