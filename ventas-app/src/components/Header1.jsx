// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import ico from '../img/ico.png'; 

import '../styles/Header.css';

const Header = ({ title }) => {
    return (
        <header className="header">
            <div className="header-left">
                <img src={ico} alt="Icono" /> {}
                <h1>{title}</h1>
            </div>
            <div className="header-right">
            <Link to="/agregar-vendedor">
                    Registrarse
                    <span></span>
                </Link>
            </div>
        </header>
    );
};

export default Header;
