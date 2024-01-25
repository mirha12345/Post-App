
import React from 'react';
import './App.css';
// import Fetch from './Components/Fetch';


import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import { Route, Routes } from 'react-router-dom';

import DetailPage from './Components/Detail';
function App() { 
  return (
    <>
  
    
     <Navbar/>
     <Routes>
        <Route path='/' element={<Banner/>}/>
        <Route path="/Readmore/:id" element={<DetailPage/>} />
      </Routes>
   
    </>
  );
}

export default App;      
       
      
     

