import React from 'react'
// import logo from '../Images/logo.png'
import tree from "../images/tree.png";
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href='/#'>
                        { <img src={tree} alt="" style={{ width: "30px" }} /> }
                
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href='/#'>work <i class="fa fa-briefcase"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='/#'>services <i class="fa fa-mug-hot"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='/#'>about <i class="fa fa-heart"></i></a>
                            </li>
                        </ul>
                        <form className="d-flex nav-right" >
                        <div>
                              <strong style={{marginRight:10}}>blog <i style={{marginRight:5}} className="fa-solid fa-message"></i></strong>
                        {/* <h3 className=''>blog <i className="fa-solid fa-message"></i></h3> */}
                        <button style={{marginRight:10, }} className='btn btn-success' type="submit">
    Planner<i className="fa fa-leaf" aria-hidden="true"></i>
    </button>
            {/* <strong style={{marginLeft:20}}>blog</strong> */}
            {/* <button style={{ backgroundColor: 'green', borderRadius: '13px', color: 'white', marginLeft: 30 }}>Planner</button> */}
          </div>
                            
                            
                        </form>
                    </div>
          

                </div>
            </nav>

        </>
    )
}

export default Navbar
{/* <div className="d-flex nav-right ">
<h3 className='ml-5'>blog <i className="fa-solid fa-message"></i></h3>
<button className="btn green-btn btn-outline-success" type="submit">
    Planner<i className="fa fa-leaf" aria-hidden="true"></i>
</button>
</div> */}