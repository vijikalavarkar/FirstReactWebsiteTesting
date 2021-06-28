import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'


export default function Navbar() {
    return (
        <>
        <div className="main_nav">
        <div className="container-fluid">
            <div className="col-10 mx-auto">


            <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">VijethKalavarkar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" exact activeClassName="menu_active" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact activeClassName="menu_active" to="/Service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact activeClassName="menu_active" to="/About">About</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link" exact activeClassName="menu_active" to="/Contact">Contact</NavLink>
        </li>
       
       
        
      </ul>
     
    </div>
  </div>
</nav>



            </div>
        </div>
        </div>
            
        </>
    )
}
