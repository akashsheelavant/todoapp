import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (  
        <nav className="nav-wrapper red darker 3">
            <div className="container">
                <a className="brand-logo">Poke'Times</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>                    
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}
 
export default NavBar;