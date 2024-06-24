// src/components/Sign.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Sign.css'; // Importa el archivo CSS correcto
import axios from '../api/axiosConfig';

const Sign = () => {
    const navigate = useNavigate();
    const initialVendedor = {
        email: '',
        password: ''
    };

    const [vendedor, setVendedor] = useState(initialVendedor);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVendedor({ ...vendedor, [name]: value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        localStorage.setItem('vendedor', JSON.stringify(vendedor));
        navigate('/vendedor-edit');


        try{
            

        }catch(err){

        }
    };

    return (
        <div className="sign-login-box">
            <h1>Inicio de sesión</h1>
            <form onSubmit={handleSubmit}>
                <div className="sign-user-box">
                    <input
                        type="email"
                        name="email"
                        value={vendedor.email}
                        onChange={handleChange}
                        placeholder="Correo Electrónico"
                        required
                    />
                </div>
                <div className="sign-user-box">
                    <input
                        type="password"
                        name="password"
                        value={vendedor.contraseña}
                        onChange={handleChange}
                        placeholder="Contraseña"
                        required
                    />
                </div>
                <center>
                    <button type="submit" className="sign-submit-button">
                        ENVIAR
                        <span></span>
                    </button>
                </center>
            </form>
        </div>
    );
};

export default Sign;
