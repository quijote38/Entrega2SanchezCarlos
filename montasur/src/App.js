import "./style.css";
import NavBar from "./components/NavBar";
import ContainerTarjetaItem from "./components/productoscompo/ContainerTarjetaItem";
import {BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route path='/'element= {<ContainerTarjetaItem/>}/>
    <Route path='/item/:id'element= {<ContainerTarjetaItem/>}/>
    <Route path='/category/:idCategory'element= {<ContainerTarjetaItem/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;


 // <>
    //   <NavBar />
    //   <ContainerTarjetaItem />
    // </>