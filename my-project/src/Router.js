import React from "react";
import { Routes, Route,Navigate } from "react-router-dom";
import  About  from "./About";
import  Home from "./Home";




 
export const  Routers= () => {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path="/" element ={<Navigate to= "/home" />} />

        </Routes>
    )
}