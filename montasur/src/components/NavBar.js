import Logo from "./monta";
import ItemlistContainer from "./ItemsList";
import CarritoWid from "./CarritoWid";

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
        itemFour = "Sacos de dormir"
        />
      </nav>

      <div className="ContainerCarrito">
        <CarritoWid />
        
         </div>
      
      

    </header>
  );
};

export default NavBar;
