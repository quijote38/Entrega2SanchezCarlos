import "../style/containerCart.css";
import close from "../img/close.svg";
import clear from "../img/clear.svg";
import ItemCart from "./ItemCart";
import { useContext } from "react";
import { listaCartContext } from "./productoscompo/ContextCart";

const ContainerCart = () => {
  
  const { listCart, clearCart } = useContext(listaCartContext)
 
  return (
            <div className="cart">
            
            <div className="cerrar">
             <button className="close">
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
                     image={product.image}
                     quantity={product.quantity}
                     price={product.price}
                  />
                                            //ojo
              )) 
            }
              </div>

      <div className="TerminarCompra">
        <button className="terminar">Acabar compra</button>

        <button className="clear">
          <img src={clear} alt="vaciar el carro"></img>
        </button>
      </div>
    </div>
  )
}

export default ContainerCart;
