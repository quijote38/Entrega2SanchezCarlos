import "../style/containerCart.css";
import close from "../img/close.svg";
import clear from "../img/clear.svg";
import ItemCart from "./ItemCart";
import { useContext } from "react";
import { listaCartContext } from "./productoscompo/ContextCart";
import { constrollerShowCart } from "./CartContexts";

const ContainerCart = () => {
  
  const { listCart, clearCart } = useContext(listaCartContext)
  const {cartShow, setCartShow} = useContext(constrollerShowCart)

  const style ={
    display: cartShow
  }
 
  const closeCart = () => {
    setCartShow ( (cartShow === "none") ? "flex" : "none" )
   }


  return (
            <div className="cart" style={style}>
            
            <div className="cerrar">
             <button className="close" onClick={closeCart}>
             <img src={close} alt= "cerrar carrito"></img>
             </button>
           </div>

            <div className="containerItemsCart">
        
           {
               (listCart.length === 0) ? <span className="emptyCart"> El carrito está vacío </span>
              : 
                  listCart.map( product => (
                  <ItemCart
                     key={product.id}
                     id={product.id}
                     title={product.title}
                     image={product.imageProduct}    //OJOOOOOO
                     quantity={product.quantity}
                     price={product.price}
                  />
                                            //ojo
              )) 
            }
              </div>

      <div className="TerminarCompra">
        <button className="terminar">Acabar compra</button>

        <button className="clear" onClick={clearCart}>
          <img src={clear} alt="vaciar el carro"></img>
        </button>
      </div>
    </div>
  )
}

export default ContainerCart;
