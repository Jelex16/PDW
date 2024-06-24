// src/components/Banner.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Banner.css';
import utmImage from '../img/UTM.svg'; 

const Banner = () => {
    return (
        <div className="banner">
            <img src={utmImage} alt="Banner Image" className="banner-image" />
            <div className="banner-content">
                <h1 className="banner-title">¿Quiénes somos nosotros?</h1>
                <p className="banner-description">Buscamos facilitar la venta de productos o alimentos en nuestra institucion ofreciendo un lugar podran mostrar  y vender sus productos </p>
            </div>
            <Link to="/escuela" className="escuela-link">
                <span></span><span></span><span></span><span></span>Escuela
            </Link>
        </div>
    );
};

export default Banner;
