// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import ico from '../img/ico.png'; 

import '../styles/Header.css';

const Header = ({ title }) => {
    return (
        <header className="header">
            <div className="header-left">
                <img src={ico} alt="Icono" />
                <h1>{title}</h1>
            </div>
            <nav className="header-right">
                <Link to="/home">
                    Home
                    <span></span>
                </Link>
                <Link to="/escuela">
                    Institución
                    <span></span>
                </Link>
                <Link to="/agregar-vendedor">
                    Registrate
                    <span></span>
                </Link>
                <Link to="/Session">
                    Inicio Sesión
                    <span></span>
                </Link>
                <Link to="/help">
                    Help
                    <span></span>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
