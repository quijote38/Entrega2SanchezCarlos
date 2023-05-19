import Imagenes from "./Imagenes";
import Descrip from "./Descrip";
import "../../style/detallesItem.css";
import fetchSimulation from "../../utils/fetchSimulation";
import BotonDetalles from "./BotonDetalles";
import AddCantCart from "./AddCantCart";
import productos from "../../utils/products";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";


const DetallesItem = () => {
  const [datos, setDatos] = useState([]);
  const { idItem } = useParams();

    useEffect(() => {
  setDatos ([])

    fetchSimulation(productos.filter((flt) => flt.id === parseInt(idItem)),2000)
      .then(resp => setDatos(resp))
      .catch(error => console.log(error));
  }, [idItem]);

  return (
    <div className="detailsItem">
        {
        datos.map(items => (
  <>
    <div className="containerLeft">
      <Imagenes imagen={items.imageProduct} />
    </div>

    <div className="containerRight">
      <Descrip
        title={items.title}
        parrafo={items.parrafo}
        cantidad={items.cantidad}
        precio={items.precio}
      />

      <div className="botones">
        <AddCantCart cant={5} />

        <BotonDetalles txt="Agregar al carrito" />
      </div>
    </div>
    </>

))
}
    </div>
  );
};

export default DetallesItem;

