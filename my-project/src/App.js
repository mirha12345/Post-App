
import {NavLink,Link}  from 'react-router-dom';
import  {Routers}  from './Router';





function App() {
  return (
  
    <div>
       <div  className='bg-info'>
      <header className='container d-flex justify-contant-between align-items-center'>
        <a href='#'>logo</a>
        <nav>
        <ul className='list-unstyled d-flex align-items-center mb-0'>
        <li className='me-3'><NavLink to='/home'>Home </NavLink></li>
        <li className='me-3'><Link to='about'>About </Link></li>
        {/* <li className='me-3'><Link to='contact'>Contact </Link></li> */}

        <li></li>
      </ul>
        </nav>
      </header>
      <Routers/>
      </div> 
     </div>
  );
}

export default App;
