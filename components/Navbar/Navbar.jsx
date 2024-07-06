import "./Navbar.css";
import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="logo">
                <Link to="/" className="logo-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                        <g fill="none" fill-rule="evenodd">
                            <circle cx="24" cy="24" r="24" fill="#FFF"/>
                            <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/>
                        </g>
                    </svg>
                </Link>
            </div>
            <hr className="line"/>
            <div className="nav-blur">
                <div className="body-nav">
                    <button><Link to="/" className="link">00 &nbsp; HOME</Link></button>
                    <button><Link to="/destination" className="link">01 &nbsp; DESTINATION</Link></button>
                    <button><Link to="/crew" className="link">02 &nbsp; CREW</Link></button>
                    <button><Link to="/technology" className="link">03 &nbsp; TECHNOLOGY</Link></button>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
