import React ,{Component} from 'react';
import Citas from './Citas.js';

class ListasCitas extends Component {
    
    render() {
        const citas = this.props.citas;
        const mensaje = Object.keys(citas).length === 0 ? 'No hay Citas':'Administrar tus Citas Aqui';


        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">{mensaje}</h2> 

                    <div className="lista-citas">
                        {Object.keys(this.props.citas).map(cita => (
                            <Citas 
                                key={cita}
                                info={this.props.citas[cita]}
                                borrarCita={this.props.borrarCita}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default ListasCitas;