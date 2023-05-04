


const Descrip = (props) => {
  return (
    <div className="cardDescrip">
      <h3 className="titulos">{props.title}</h3>

      <div className="descripcion">
        <span className="tituloDescrip"> Descripción:</span>
        <p className="texto">{props.parrafo}</p>
      </div>

      <span className="cantidades"> cantidad: {props.cantidad} unidades</span>

      <span className="precio">${props.precio}</span>
    </div>
  );
};

export default Descrip;
