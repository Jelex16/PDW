// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Escuela from './pages/Escuela';
import VendedorForm from './components/VendedorForm';
import Productos from './pages/Productos';
import VendedorEdit from './pages/VendedorEdit';
import Session from './pages/Session';
import Help from './pages/Help'; 
import Header from './components/Header'; 

function App() {
    return (
        <Router>
            <Routes>
                {}
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />

                {}
                <Route path="/escuela" element={<>
                    <Header title="JDL" />
                    <Escuela />
                </>} />

                <Route path="/agregar-vendedor" element={<>
                    <Header title="JDL" />
                    <VendedorForm />
                </>} />

                <Route path="/ventas" element={<>
                    <Header title="JDL" />
                    <Productos />
                </>} />

                <Route path="/vendedor-edit" element={<>
                    <Header title="JDL" />
                    <VendedorEdit />
                </>} />

                {}
                <Route path="/session" element={<>
                    <Header title="JDL" />
                    <Session />
                </>} />

                {}
                <Route path="/help" element={<>
                    <Header title="JDL" />
                    <Help />
                </>} />
            </Routes>
        </Router>
    );
}

export default App;
