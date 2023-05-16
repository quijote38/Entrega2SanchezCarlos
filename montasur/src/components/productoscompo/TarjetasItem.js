import Imagenes from "./Imagenes";
import "../../style/cardItem.css";
import Descrip from "./Descrip";
import BotonDetalles from "./BotonDetalles";
import BotonAgregar from "./BotonAgregar";
import { Link } from "react-router-dom";


const CardItem = (props) => {
  return (
    <div className="cardItem">
      <Imagenes imagenes={props.imagen} />
      <Descrip
        title={props.title}
        cantidad={props.cantidad}
        precio={props.precio}
      />
      <div className="botones">
        
        <Link to= {`/item/${props.id}`}>

          <BotonDetalles txt= "Ver detalles" />
        </Link>

        <BotonAgregar 
        id= {props.id}
        
        
        />
      </div>
    </div>
  );
};

export default CardItem;



