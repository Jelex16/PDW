import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/TipoCartaSelector.css'; // Importa el CSS base

const TipoCartaSelector = ({ tipos }) => {
  const [selectedTipo, setSelectedTipo] = useState(tipos && tipos.length > 0 ? tipos[0] : null);
  const [estatus, setEstatus] = useState('activo'); // Estado para manejar el estatus

  useEffect(() => {

    const loadDynamicCss = async () => {

      try {
        // Eliminar cualquier CSS dinámico previamente cargado
        const previousLinkElement = document.querySelector('#dynamic-css');
        if (previousLinkElement) {
          previousLinkElement.remove();
        }

        if (selectedTipo) {
          // Cargar el CSS dinámico correspondiente al tipo seleccionado
          const cssModule = await import(`../styles/VendedorCardTipo${selectedTipo.id}.css`);
          const linkElement = document.createElement('link');
          linkElement.rel = 'stylesheet';
          linkElement.id = 'dynamic-css';
          linkElement.href = cssModule.default;

          // Agregar el link al head del documento
          document.head.appendChild(linkElement);

          // Limpiar el link en el desmontaje del componente
          return () => linkElement.remove();
        }
      } catch (error) {
        console.error(`Error loading CSS for ${selectedTipo ? selectedTipo.nombre : 'selectedTipo'}`, error);
      }
    };

    loadDynamicCss();
  }, [selectedTipo]); // Volver a ejecutar solo cuando selectedTipo cambie

  const handleSelect = (tipo) => {

    setSelectedTipo(tipo);
  };

  const handleEstatusChange = (e) => {
    
    setEstatus(e.target.value);
  };

  return (
    <div className="tipo-carta-selector-container">
      <div className="izquierda">
        <h2>Tipos de Carta</h2>
        <div className="tipos-container">
          {tipos && tipos.map((tipo) => (
            <div key={tipo.id} className="tipo-carta-option">
              <input
                type="checkbox"
                id={`tipo-carta-${tipo.id}`}
                name="tipo-carta"
                value={tipo.id}
                checked={selectedTipo && selectedTipo.id === tipo.id}
                onChange={() => handleSelect(tipo)}
              />
              <label htmlFor={`tipo-carta-${tipo.id}`}>{tipo.nombre}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="derecha">
        <h3>Previsualización de la Carta</h3>
        <div className="tipo-carta-preview-container">
          <div className="tipo-carta-preview">
            {selectedTipo ? (
              <div className={`blank-card card-${selectedTipo.id}`}>
                {/* Contenido específico del tipo seleccionado */}
                <p>Previsualización de {selectedTipo.nombre}</p>
              </div>
            ) : (
              <p>Selecciona un tipo de carta para ver la previsualización.</p>
            )}
          </div>
        </div>
        {/* Selección de Estatus */}
        <div className="estatus-container">
          <label htmlFor="estatus-select">Estatus:</label>
          <select id="estatus-select" value={estatus} onChange={handleEstatusChange}>
            <option value="activo">Activo</option>
            <option value="desactivo">Inactivo</option>
          </select>
        </div>
      </div>
    </div>
  );
};

TipoCartaSelector.propTypes = {
  tipos: PropTypes.array.isRequired,
};

// Array de tipos
const tipos = [
  { id: 'A', nombre: 'Tipo A' },
  { id: 'B', nombre: 'Tipo B' },
  { id: 'C', nombre: 'Tipo C' }
];

export default () => <TipoCartaSelector tipos={tipos} />;
