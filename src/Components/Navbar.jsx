import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({changetheme , theme}) => {
  return (
    <nav className={theme ? "navbar bg-dark":"navbar bg-light"}>
        <div className="container-fluid ">
            <span className={theme?"navbar-brand text-light h1":"navbar-brand text-dark h1"}>USERS APP</span>
            <span>
            <Link to="/" className={theme?"navbar-brand text-light h1":"navbar-brand text-dark mb-50 "}>Home</Link>
            <Link to="/About" className={theme?"navbar-brand text-light h1":"navbar-brand text-dark mb-50 "}>About</Link>
            <button className={theme ? "btn btn-light btn-sm":"btn btn-dark btn-sm"} onClick={changetheme}>{theme? "Light Mode":"Dark Mode" }</button>
            </span>
        </div>
    </nav>
  )
}

export default Navbar;
