import fetchSimulation from "../../utils/fetchSimulation";
import productos from "../../utils/products";
import { useState, useEffect } from "react";
import CardItem from "./TarjetasItem";
import "../../style/containerCardsItems.css"
import { useParams } from "react-router-dom";
import CircleLoader from "react-spinners/ClipLoader";


const ContainerTarjetaItem = () => {
  const [datos, setDatos] = useState([]);
  let { idCategory } = useParams (); 

  
  
  
useEffect(() => {

  setDatos ( [] ) ;

  if (idCategory === undefined){
        fetchSimulation(productos, 1000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
      }else{
        fetchSimulation(productos.filter(filter => filter.type === idCategory ), 2000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
      }
    }, [idCategory]);
   
  return (
    < div className="containerCardItems">
      
      
      {    
      (datos.length === 0 ) ? <div className="containerSpinner"> <CircleLoader color="rgba(7, 31, 167, 1)" />  </div> 
      : datos.map(product => (
        <CardItem
          key={product.id}
          id={product.id}
          imagen={product.imageProduct}
          title={product.title}
          cantidad={product.stock}
          precio={product.price}
        />
      ))}
    </ div>
  );
}

export default ContainerTarjetaItem;



 