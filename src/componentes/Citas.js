import React ,{Component} from 'react';

class Citas extends Component {
    
    eliminarCita = () => {
        this.props.borrarCita(this.props.info.id);
    }

    render() {
        const {fecha,hora,mascota,propietario,sintoma} = this.props.info;
        
        return (
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">{mascota}</h3>
                    <p className="card-text"><span>Nombre del Dueño: </span> {propietario} </p>
                    <p className="card-text"><span>Fecha: </span>{fecha}</p>
                    <p className="card-text"><span>Hora: </span>{hora}</p>
                    <p className="card-text"><span>Sintomas: </span></p>
                    <p className="card-text">{sintoma}</p>

                    <button onClick={this.eliminarCita} className="btn btn-danger">Borrar &times; </button> 
                </div>
            </div>    
        )
    }
}

export default Citas;