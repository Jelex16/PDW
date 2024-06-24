import React, { useState } from 'react';
import VendedorCard from '../components/VendedorCard';
import TipoCartaSelector from '../components/TipoCartaSelector';
import ProductoForm from '../components/ProductoForm';
import '../styles/VendedorEdit.css';

const VendedorEdit = () => {
    const [vendedorData, setVendedorData] = useState({
        firstname: 'Juan',
        lastname: 'Perez',
        email: 'juan@example.com',
        phone: '123-456-7890',
        productType: 'Electronics',
        image: ''
    });

    const [cardDesign, setCardDesign] = useState('default');
    const [isEditing, setIsEditing] = useState(false);
    const [tipoSeleccionado, setTipoSeleccionado] = useState(null);
    const [horario, setHorario] = useState({ entrada: '', salida: '' });

    const tiposDeCartas = [
        { id: 1, nombre: 'Carta Tipo A', design: 'tipo-a' },
        { id: 2, nombre: 'Carta Tipo B', design: 'tipo-b' },
        { id: 3, nombre: 'Carta Tipo C', design: 'tipo-c' }
    ];

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setVendedorData({ ...vendedorData, image: URL.createObjectURL(files[0]) });
        } else {
            setVendedorData({ ...vendedorData, [name]: value });
        }
    };

    const handleCardDesignChange = (design) => {
        setCardDesign(design);
    };

    const handleTipoCartaSelect = (tipo) => {
        setTipoSeleccionado(tipo);
        setCardDesign(tipo.design);
    };

    const handleHorarioChange = (e) => {
        const { name, value } = e.target;
        setHorario({ ...horario, [name]: value });
    };

    const handleGuardarProducto = async () => {
        // Lógica para guardar el tipo de carta seleccionado y el horario en la base de datos
        console.log('Tipo de carta seleccionado:', tipoSeleccionado);
        console.log('Horario de entrada y salida:', horario);
        
        try {
            const response = await fetch('/api/saveVendedor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    tipoSeleccionado, 
                    horario 
                })
            });

            if (response.ok) {
                console.log('Datos guardados con éxito');
            } else {
                console.error('Error al guardar los datos');
            }
        } catch (error) {
            console.error('Error en la petición:', error);
        }
    };

    const handleDeleteClick = () => {
        // Lógica para manejar la eliminación del vendedor
        console.log('Vendedor eliminado');
    };

    return (
        <div className="vendedor-edit-container">
            <div className="resolviendo">
                <div className="vendedor-edit-left">
                    <VendedorCard vendedor={vendedorData} design={cardDesign} onEdit={() => setIsEditing(true)} />
                    {isEditing && (
                        <div className="edit-modal">
                            <form className="edit-form">
                                <div className="user-box">
                                    <input
                                        type="text"
                                        name="firstname"
                                        value={vendedorData.firstname}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label>Firstname</label>
                                </div>
                                <div className="user-box">
                                    <input
                                        type="text"
                                        name="lastname"
                                        value={vendedorData.lastname}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label>Lastname</label>
                                </div>
                                <div className="user-box">
                                    <input
                                        type="email"
                                        name="email"
                                        value={vendedorData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label>Email</label>
                                </div>
                                <div className="user-box">
                                    <input
                                        type="text"
                                        name="phone"
                                        value={vendedorData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label>Phone</label>
                                </div>
                                <div className="user-box">
                                    <input
                                        type="text"
                                        name="productType"
                                        value={vendedorData.productType}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label>Product Type</label>
                                </div>
                                <div className="user-box">
                                    <input
                                        type="file"
                                        name="image"
                                        accept="image/*"
                                        onChange={handleChange}
                                    />
                                    <label>Image</label>
                                </div>
                                <button type="button" onClick={() => setIsEditing(false)} className="guardar-button-custom">
                                <span className="text">Guardar</span>
                                </button>
                            </form>
                        </div>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                        <button className="delete-button" onClick={handleDeleteClick}>
                            <span className="text">Delete</span>
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                                </svg>
                            </span>
                        </button>
                        <button className="guardar-button" onClick={handleGuardarProducto}>
                            <span className="text">Guardar</span>
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <br />
                    <div className="guardar-form">
                        <h3>Seleccionar Horario</h3>
                        <div className="horario-inputs">
                            <div>
                                <label htmlFor="entrada">Hora de Entrada:</label>
                                <input
                                    type="time"
                                    id="entrada"
                                    name="entrada"
                                    value={horario.entrada}
                                    onChange={handleHorarioChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="salida">Hora de Salida:</label>
                                <input
                                    type="time"
                                    id="salida"
                                    name="salida"
                                    value={horario.salida}
                                    onChange={handleHorarioChange}
                                />
                            </div>
                            <button className="new-btn" onClick={handleGuardarProducto}>
                            Guardar
                            </button>
                        </div>
                    </div>
                </div>
                <div className="vendedor-edit-right">
                    <TipoCartaSelector tipos={tiposDeCartas} onSelect={handleTipoCartaSelect} />
                </div>
            </div>
            <div className="producto-form-container">
                <ProductoForm />
            </div>
        </div>
    );
};

export default VendedorEdit;
