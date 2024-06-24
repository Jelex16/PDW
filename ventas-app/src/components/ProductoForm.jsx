import React, { useState } from 'react';
import '../styles/ProductoForm.css';

const ProductoForm = () => {
    const [producto, setProducto] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        imagen: ''
    });

    const [productos, setProductos] = useState([]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'imagen') {
            setProducto({ ...producto, imagen: URL.createObjectURL(files[0]) });
        } else {
            setProducto({ ...producto, [name]: value });
        }
    };

    const handleAdd = () => {
        setProductos([...productos, producto]);
        setProducto({ nombre: '', descripcion: '', precio: '', imagen: '' });
    };

    return (
        <div className="producto-form-container">
            <div className="producto-form">
                <div className="producto-inputs">
                    <input
                        type="file"
                        name="imagen"
                        accept="image/*"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="nombre"
                        value={producto.nombre}
                        onChange={handleChange}
                        placeholder="Nombre del producto"
                        required
                    />
                    <input
                        type="text"
                        name="descripcion"
                        value={producto.descripcion}
                        onChange={handleChange}
                        placeholder="Descripción del producto"
                    />
                    <input
                        type="number"
                        name="precio"
                        value={producto.precio}
                        onChange={handleChange}
                        placeholder="Precio del producto"
                        required
                    />
                    <button type="button" onClick={handleAdd}>Agregar Producto</button>
                </div>
            </div>
            <div className="producto-list">
                {productos.map((prod, index) => (
                    <div key={index} className="producto-card">
                        {prod.imagen && <img src={prod.imagen} alt="Producto" className="producto-img" />}
                        <div className="producto-info">
                            <h3>{prod.nombre}</h3>
                            <p>{prod.descripcion}</p>
                        </div>
                        <div className="producto-precio">
                            <p>${prod.precio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductoForm;
