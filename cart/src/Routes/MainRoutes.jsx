import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import { Products } from "../components/Products"
import { Navbar } from "../components/Navbar";
import { Men } from "../components/Men"
import { Women } from "../components/Women"
const MainRoutes = () => {
  return <>{/* Navbar and all the routes */}
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/products/*' element={ <Products /> }></Route>
    <Route path='/products/men' element={ <Men /> }></Route>
    <Route path='/products/women' element={ <Women /> }></Route>
  </Routes>
  
  </>;
};
export { MainRoutes };
