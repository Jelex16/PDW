// src/components/VendedorForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/VendedorForm.css';
import axios from '../api/axiosConfig';

const VendedorForm = () => {
    const navigate = useNavigate();
    const initialVendedor = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        productType: ''
    };

    const [vendedor, setVendedor] = useState(initialVendedor);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVendedor({ ...vendedor, [name]: value });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            // enviar datos al backend
            const response = await axios.post('/users/register', vendedor);

            console.log('Respuesta del servidor', response.data);

            navigate('/vendedor-edit', { state: { vendedor } });
            // navigate('/vendedor-edit');
        } catch (err) {
            console.error('Error al enviar el formulario', err);
        }
    };


    return (
        <div className="login-box">
            <h1>Registro</h1>
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <input
                        type="text"
                        name="nombre"
                        value={vendedor.nombre}
                        onChange={handleChange}
                        placeholder="Nombre"
                        required
                    />
                </div>
                <div className="user-box">
                    <input
                        type="text"
                        name="apellido"
                        value={vendedor.apellido}
                        onChange={handleChange}
                        placeholder="Apellido"
                        required
                    />
                </div>
                <div className="user-box">
                    <input
                        type="email"
                        name="correo_electronico"
                        value={vendedor.correo_electronico}
                        onChange={handleChange}
                        placeholder="Correo Electrónico"
                        required
                    />
                </div>
                <div className="user-box">
                    <input
                        type="text"
                        name="telefono"
                        value={vendedor.telefono}
                        onChange={handleChange}
                        placeholder="Teléfono"
                        required
                    />
                </div>
                <div className="user-box">
                    <input
                        type="productType"
                        name="tipoProducto"
                        value={vendedor.tipoProducto}
                        onChange={handleChange}
                        placeholder="Tipo de producto"
                        required
                    />
                </div>
                <div className="user-box">
                    <input
                        type="password"
                        name="contraseña"
                        value={vendedor.contrasea}
                        onChange={handleChange}
                        placeholder="Contraseña"
                        required
                    />
                </div>
                <div className="user-box">
                    <input
                        type="password"
                        name="confirmar_contraseña"
                        value={vendedor.confirmar_contraseña}
                        onChange={handleChange}
                        placeholder="Confirmar Contraseña"
                        required
                    />
                </div>
                <center>
                <button type="submit" submit>
                        ENVIAR
                        <span></span>
                    </button>          
                </center>
            </form>
        </div>
    );
};

export default VendedorForm;
