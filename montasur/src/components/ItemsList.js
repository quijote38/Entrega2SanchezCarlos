import { Link } from "react-router-dom"

const ItemlistContainer = (props) => {
  return (
    <ul>
      <li>
        <Link to= "category/Mochilas"> {props.itemOne} </Link>
      </li>
      <li>
        <Link to= "category/Carpas"> {props.itemTwo} </Link>
      </li>
      <li>
        <Link to= "category/Zapatos"> {props.itemThree} </Link>
      </li>
      <li>
        <Link to= "category/Sacos de dormir"> {props.itemFour} </Link>
      </li>
    </ul>
  );
};

export default ItemlistContainer;
