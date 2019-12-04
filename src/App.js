import React ,{Component} from 'react';
import Header from './componentes/Header.js'
import AgregarCitas from './componentes/AgregarCitas.js'


class App extends Component{

  state = {
    citas : []
  }

  crearCita = (nuevaCita) => {
    const citas = [...this.state.citas,nuevaCita];
    console.log(citas);

    this.setState ({
      citas
    });
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
