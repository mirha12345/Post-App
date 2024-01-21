import React from 'react'
import tree from "./images/tree.png"
const About = () => {
    return ( 
        
              
              <nav class="navbar navbar-expand">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={tree} style={{width:50}}></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Work<i class="fa-solid fa-briefcase"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services<i class="fa-solid fa-mug-hot"></i></a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">About<i class="fa-solid fa-heart"></i></a>
        
        </li>
        
      </ul>
      <form class="d-flex">
      <a class="nav-link" href="#">blog</a>
        <button class="btn btn-outline-success" type="submit">Planner</button>
      </form>

    </div>
  </div>
</nav>
        
        
    

        
        
     );
}
 
export default About;   