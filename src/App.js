import React ,{Component} from 'react';
import Header from './componentes/Header.js';
import AgregarCitas from './componentes/AgregarCitas.js';
import ListasCitas from './componentes/ListasCitas.js';


class App extends Component{

  state = {
    citas : []
  }

  componentDidMount() {
    const citasLS = localStorage.getItem('citas');
    if (citasLS) {
      this.setState({
        citas : JSON.parse(citasLS)
      })
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      'citas',
      JSON.stringify(this.state.citas)
    )
  }
  

  crearCita = (nuevaCita) => {
    const citas = [...this.state.citas,nuevaCita];

    this.setState ({
      citas
    });
  }

  borrarCita = id => {
    const citaActuales = [...this.state.citas];

    const citas = citaActuales.filter(cita => cita.id !== id );

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
          <div className="col-md-6">
            <ListasCitas
              citas={this.state.citas}
              borrarCita={this.borrarCita}
            />
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
