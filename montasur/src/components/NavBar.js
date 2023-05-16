import Logo from "./monta";
import ItemlistContainer from "./ItemsList";
import CarritoWid from "./CarritoWid";
// import ContainerCarrito from "./ContainerCarrito";
// import ContextCart from "./ContextCart";

const NavBar = () => {
  
  return (
    // <ContextCart>
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
      
         {/* <ContainerCarrito /> */}

    </header>
    // </ContextCart>
  );
};

export default NavBar;
