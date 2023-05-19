import { useContext } from "react";
import carrito from "../img/carrito.svg"
import { listaCartContext } from "./productoscompo/ContextCart";
import { constrollerShowCart } from "./CartContexts";

const CarritoWid = () => {

const {cartShow, setCartShow} = useContext(constrollerShowCart)
    const { listCart } = useContext(listaCartContext)

   const showCart = () => {
    setCartShow ( (cartShow === "none") ? "flex" : "none" )
   }
   
   //26:56 ver las clases están con otro nombre
    return (
        <div className= "containerCantidades" onClick={showCart}>     
         <img src= {carrito} alt="car"/>  
        <span className="contadorCarrito"> 
        {listCart.length}
        </span>
        </div>
    )
}

export default CarritoWid;

