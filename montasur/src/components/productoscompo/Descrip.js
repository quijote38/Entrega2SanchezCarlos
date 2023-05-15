


const Descrip = (props) => {
  return (
    <div className="cardDescription">
      <h3 className="titulos">{props.title}</h3>

      <div className="description">
        <span className="tituloDescrip"> Descripción:</span>
        <p className="texto">{props.parrafo}</p>
      </div>

      <span className="cant"> cantidad: {props.cantidad} unidades</span>

      <span className="precio">${props.precio}</span>
    </div>
  );
};

export default Descrip;
