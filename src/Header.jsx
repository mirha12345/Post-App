
import React from "react";
import tree from'../img/tree.jpg';
const Nav = () => {
    return (  
        <nav class="navbar navbar-expand">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={tree} style={{width:50}}></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Work</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    );
}
 export default Nav;