import "./style.css";
import NavBar from "./components/NavBar";
import ContainerTarjetaItem from "./components/productoscompo/ContainerTarjetaItem";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import DetallesItem from "./components/productoscompo/DetallesItem";
// import { createContext, useState } from 'react';


function App() {
  return (
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route path='/'element= {<ContainerTarjetaItem/>}/>
    <Route path='/item/:idItem'element= {<DetallesItem/>}/>
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