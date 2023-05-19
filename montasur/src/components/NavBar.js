import Logo from "./monta";
import ItemlistContainer from "./ItemsList";
import CarritoWid from "./CarritoWid";
import ContainerCart from "./ContainerCart";


const NavBar = () => {
  
  return (
    
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
  
  );
};

export default NavBar;
