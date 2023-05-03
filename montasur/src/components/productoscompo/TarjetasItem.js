import Imagenes from "./Imagenes";
import "../../style/cardItem.css";
import Descrip from "./Descrip";
import BotonDetalles from "./BotonDetalles";
import BotonAgregar from "./BotonAgregar";

const CardItem = (props) => {
  return (
    <div className="cardItem">
      <Imagenes imagen={props.imagen} />
      <Descrip
        title={props.title}
        cantidad={props.cantidad}
        precio={props.precio}
      />
      <div className="botones">
        <BotonDetalles txt="ver detalles " />
        <BotonAgregar />
      </div>
    </div>
  );
};

export default CardItem;
