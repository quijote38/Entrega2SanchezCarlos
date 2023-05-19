import carrito from "../img/carrito.svg"

const CarritoWid = () => {
    return (
        <div className= "containerCantidades">  <img src= {carrito} alt="carrito"/>  
        <span className="contadorCarrito"> 
        1
        </span>
        </div>
    )
}

export default CarritoWid;

