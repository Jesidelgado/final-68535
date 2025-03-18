import React from "react";
import { Link, NavLink } from "react-router-dom";
import originalImage from "../assets/original.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                <img src={originalImage} alt="logo" />
            </Link>
            <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/productos/Filtros y Aceites">Filtros y Aceites</NavLink></li>
            <li><NavLink to="/productos/Suspensión y Frenos">Suspensión y Frenos</NavLink></li>
            <li><NavLink to="/productos/Encendido">Encendido</NavLink></li>
            <li><NavLink to="/productos/Luminaria">Iluminación</NavLink></li>
            <li><NavLink to="/nosotros">Nosotros</NavLink></li>
            <li><CartWidget /> </li>
            </ul>
        </nav>
    )
}

export default NavBar;