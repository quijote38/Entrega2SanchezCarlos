import Imagenes from "./Imagenes";
import Descrip from "./Descrip";
import "../../style/detalles.css";
import fetchSimulation from "../../utils/fetchSimulation";
import BotonDetalles from "./BotonDetalles";
import AddCantCart from "./AddCantCart";
import productos from "../../utils/products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetallesItem = () => {
  const [datos, setDatos] = useState([]);
  const { idItem } = useParams();

  useEffect(() => {
setDatos ([])

    fetchSimulation(productos.filter(flt => flt.id == idItem),3000)
      .then(resp => setDatos(resp))
      .catch(error => console.log(error));
  }, [idItem]);

  return (
    <div className="detallesItem">
      {
      
      
      
      
      datos.map((items) => (
        <>
          <div className="containerIzquierda">
            <Imagenes imagen={items.imageProduct.firtsImge} />
          </div>

          <div className="containerDerecha">
            <Descrip
              title={items.title}
              parrafo={items.parrafo}
              cantidad={items.cantidad}
              precio={items.precio}
            />

            <div div className="botones">
              <AddCantCart cant={5} />

              <BotonDetalles txt="Agregar al carrito" />
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default DetallesItem;

// --------------

// {datos.map(items => (
//   <>
//     <div className="containerIzquierda">
//       <Imagenes Imagenes={datos [0].imageProduct.firtsImge} />
//     </div>

//     <div className="containerDerecha">
//       <Descrip
//         title={datos[0].title}
//         parrafo={datos[0].parrafo}
//         cantidad={datos[0].cantidad}
//         precio={datos[0].precio}
//       />

//       <div div className="botones">
//         <AddCantCart cant={5} />

//         <BotonDetalles txt="Agregar al carrito" />
//       </div>
//     </div>
//     </>

// ))
// }
// </div>
// )
// }

// --------------------------


// {/* <div className="containerIzquierda">
//             <Imagenes Imagenes={datos[0].imageProduct.firtsImge} />
//           </div>

//           <div className="containerDerecha">
//             <Descrip
//               title={datos[0].title}
//               parrafo={datos[0].parrafo}
//               cantidad={datos[0].cantidad}
//               precio={datos[0].precio}
//             />

//             <div div className="botones">
//               <AddCantCart cant={5} />

//               <BotonDetalles txt="Agregar al carrito" />
//             </div>
//           </div> */}