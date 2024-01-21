
import React from 'react';
import './App.css';


import About from './About'
import Banners from './Banner'
import { Route, Routes } from 'react-router-dom';

import Datadetail from './History';
function App() { 
  return (
    <>
  
    <About/>
     
     <Routes>
        <Route path='/' element={<Banners/>}/>
        <Route path="/History/:id" element={<Datadetail />} />
      </Routes>
     
   
    </>
  );
}

export default App;      
       
      
     

