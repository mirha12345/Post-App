
import React from 'react';
import './App.css';
// import Fetch from './Components/Fetch';


import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import { Route, Routes } from 'react-router-dom';


import DetailPage from './Components/Detail';
import AddButton from './Components/Addbutton';
import EditPost from './Components/Editpost';
function App() { 
  return (
    <>
  
   
     <Navbar/>
     <Routes>
        <Route path='/' element={<Banner/>}/>
        <Route path="/Readmore/:id" element={<DetailPage/>} />
        <Route path="/add" element={<AddButton/>} />
        {/* <Route path="/editpost" element={<Edit/>} /> */}
        {/* <Route path="/post/:postId/edit" component={EditPost} /> */}
        <Route path="/posts/:id/edit" element={<EditPost />} />
       

      
        
      </Routes>
   
    </>
  );
}


export default App;      
       
      
     

