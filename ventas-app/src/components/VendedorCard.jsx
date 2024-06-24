import React from 'react';
import PropTypes from 'prop-types';
import '../styles/VendedorCard.css';
import editIcon from '../img/edit.png'; 
import '../styles/VendedorCardTipoA.css'; 
import '../styles/VendedorCardTipoB.css'; 
import '../styles/VendedorCardTipoC.css'; 
import { useLocation } from 'react-router-dom'


const VendedorCard = ({ vendedor, design, onEdit }) => {
    const cardClassName = `vendedor-card ${design}`;

    return (
        <div className={cardClassName}>
            <img src={vendedor.image} alt="Avatar" />
            <div className="vendedor-card-content">
                <h2>{vendedor.firstname} {vendedor.lastname}</h2>
                <p>{vendedor.email}</p>
                <p>{vendedor.productType}</p>
                <p>{vendedor.phone}</p>
                <button className="edit-button" onClick={onEdit}>
                    <img src={editIcon} alt="Edit" />
                </button>
            </div>
        </div>
    );
};

VendedorCard.propTypes = {
    vendedor: PropTypes.object.isRequired,
    design: PropTypes.string.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default VendedorCard;
