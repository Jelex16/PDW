// src/pages/Escuela.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Escuela.css';
import utmImage from '../img/UTM.svg'; 

const Escuela = () => {
    const [vendedoresActivos, setVendedoresActivos] = useState(0); // Iniciar con 0

    useEffect(() => {
        // Simulando una llamada a la base de datos para obtener el número de vendedores activos
        const fetchVendedoresActivos = async () => {
            try {
                // Aquí deberías hacer una llamada a tu API o base de datos
                const response = await fetch('/api/vendedores/activos'); // Ajusta la URL según tu API
                const data = await response.json();
                setVendedoresActivos(data.count); // Suponiendo que el JSON contiene un campo `count` con el número de vendedores activos
            } catch (error) {
                console.error('Error al obtener el número de vendedores activos:', error);
            }
        };

        fetchVendedoresActivos();
    }, []);

    return (
        <div>
            <div className="escuela-content">
                <div className="escuela-card">
                    <div className="escuela-card-left">
                        <img src={utmImage} alt="Imagen UTM" className="utm-image" />
                    </div>
                    <div className="escuela-card-right">
                        <h1 className="utm-title">Universidad Tecnológica Metropolitana</h1>
                        <p className="vendedores-count">Vendedores activos: {vendedoresActivos}</p>
                        <Link to="/ventas" className="escuela-btn">
                            Ventas
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Escuela;
