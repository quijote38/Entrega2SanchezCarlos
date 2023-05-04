import fetchSimulation from "../../utils/fetchSimulation";
import productos from "../../utils/products";
import { useState, useEffect } from "react";
import CardItem from "./TarjetasItem";



import "../../style/containerCardsItems.css"
import { useParams } from "react-router-dom";


const ContainerTarjetaItem = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams (); 

  useEffect(() => {

    setDatos ([]);

    if (idCategory === undefined){
      fetchSimulation(productos, 3000)
      .then(resp => setDatos(resp))
      .catch(error => console.log(error))
    }else{
      fetchSimulation(productos.filter(filter => filter.type === idCategory ), 3000)
      .then(resp => setDatos(resp))
      .catch(error => console.log(error))
    }
  }, [idCategory]);

  return (
    < div className="containerCardItems">
      {datos.map((product) => (
        <CardItem
          key={product.id}
          imagen={product.imageProduct.firtsImage}
          title={product.title}
          cantidad={product.stock}
          precio={product.price}
        />
      ))}
    </ div>
  );
};

export default ContainerTarjetaItem;
