import React ,{Component} from 'react';
import Header from './componentes/Header.js'
import AgregarCitas from './componentes/AgregarCitas.js'


class App extends Component{

  crearCita = () => {
    console.log("Desdes app.js")
  }

  render() {
    return (
      <div className="container">
        <Header
          titulo={'Administrador de Pacientes de Veterinaria'}
        />
        <div className="row">
          <div className="col-md-6">
            <AgregarCitas 
              crearCita={this.crearCita}
            />
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
