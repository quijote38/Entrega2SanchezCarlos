import { Link } from "react-router-dom"

const ItemlistContainer = (props) => {
  return (
    <ul>
      <li >
        <Link to= "category/mochilas"> {props.itemOne} </Link>
      </li>
      
      <li>
        <Link to= "category/carpas"> {props.itemTwo} </Link>
      </li>
      
      <li>
        <Link to= "category/zapatos"> {props.itemThree} </Link>
      </li>
      
      <li>
        <Link to= "category/sacos de dormir"> {props.itemFour} </Link>
      </li>
    </ul>
  );
};

export default ItemlistContainer;
