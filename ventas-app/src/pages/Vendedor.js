import React from 'react';
import Header from '../components/Header'; // Verifica que la ruta y el nombre del archivo sean correctos
import VendedorForm from '../components/VendedorForm';

const Vendedor = () => {
    return (
        <div>
            <Header title="JDL" /> {}
            <VendedorForm />
        </div>
    );
};

export default Vendedor;
