import React, { useContext, useState } from 'react';
import { CardContext } from '../context/CardContext';
import '../styles/VendedoresContainer.css'; 

const Productos = () => {
    const { cardData } = useContext(CardContext); 
    const [productoNombre, setProductoNombre] = useState('');
    const [productoDescripcion, setProductoDescripcion] = useState('');
    const [productoImagen, setProductoImagen] = useState('');
    const [productos, setProductos] = useState([]);
    const [mostrarProductos, setMostrarProductos] = useState(false);

    // Función para guardar un nuevo producto
    const handleGuardarProducto = () => {
        const nuevoProducto = {
            nombre: productoNombre,
            descripcion: productoDescripcion,
            imagen: productoImagen
        };
        setProductos([...productos, nuevoProducto]);
    };

    // Función para mostrar los productos cuando se selecciona una tarjeta
    const handleMostrarProductos = () => {
        setMostrarProductos(true);
    };

    return (
        <div>
            <div className="vendedores-container">
                <div className="carta-container">
                    {/* Mostrar la tarjeta del vendedor si está activa */}
                    {cardData && cardData.estatus === 'activo' && (
                        <div className={`custom-card ${cardData.id === 'A' ? 'card-tipoA' : cardData.id === 'B' ? 'card-tipoB' : 'card-tipoC'}`}>
                            <div className="custom-bg"></div>
                            <div className="custom-blob"></div>
                            <div className="card-content">
                                <h3>{cardData.nombre}</h3>
                                <img src={cardData.imagen} alt={cardData.nombre} className="card-image" />
                                <p>Descripción: {cardData.descripcion}</p>
                                <p>Email: {cardData.email}</p>
                                {/* Otros datos relevantes */}
                                <button onClick={handleMostrarProductos}>Ver Productos</button>
                            </div>
                        </div>
                    )}
                    
                    {/* Formulario de productos */}
                    <div className="producto-form-container" style={{ display: mostrarProductos ? 'block' : 'none' }}>
                        <div className="producto-form">
                            <div className="producto-inputs">
                                <input
                                    type="text"
                                    placeholder="Nombre del producto"
                                    value={productoNombre}
                                    onChange={(e) => setProductoNombre(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Descripción del producto"
                                    value={productoDescripcion}
                                    onChange={(e) => setProductoDescripcion(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="URL de la imagen del producto"
                                    value={productoImagen}
                                    onChange={(e) => setProductoImagen(e.target.value)}
                                />
                                <button className="guardar-button" onClick={handleGuardarProducto}>
                                    Guardar Producto
                                </button>
                            </div>
                        </div>
                        
                        {/* Lista de productos */}
                        <div className="producto-list">
                            {productos.map((producto, index) => (
                                <div className="producto-card" key={index}>
                                    <img src={producto.imagen} alt={producto.nombre} />
                                    <div className="producto-info">
                                        <h3>{producto.nombre}</h3>
                                        <p>Descripción: {producto.descripcion}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productos;
