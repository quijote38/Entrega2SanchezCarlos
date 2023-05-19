import Logo from "./monta";
import ItemlistContainer from "./ItemsList";
import CarritoWid from "./CarritoWid";
import ContainerCart from "./ContainerCart";
import CartContexts from "./CartContexts";


const NavBar = () => {
  
  return (

    <CartContexts>
    
    <header>
      <div className="containerNav">
<Logo/>

      </div>

      <nav className="ContainerListNav">

        <ItemlistContainer 
        itemOne = "Mochilas"
        itemTwo = "Carpas"
        itemThree = "Zapatos"
        itemFour = "sacos de dormir"
        />
      </nav>

      <div className="ContainerCarrito">
        <CarritoWid />
        
         </div>
      
       
<ContainerCart />
    </header>
    </CartContexts>
  
  );
};

export default NavBar;
