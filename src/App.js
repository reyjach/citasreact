import React from 'react';
import Header from './componentes/Header.js'
import AgregarCitas from './componentes/AgregarCitas.js'

function App() {
  return (
    <div className="container">
      <Header
        titulo={'Administrador de Pacientes de Veterinaria'}
      />
      <div className="row">
        <div className="col-md-6">
          <AgregarCitas 
            
          />
        </div>
      </div>
    </div>
  );
}

export default App;
