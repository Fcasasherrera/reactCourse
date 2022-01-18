import React, {Fragment, useState} from 'react';
import axios from 'axios';

const Formulario = () => {


    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,  
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = async (event) => {
        let response;
        try {
            response = await axios.post('www.ruta.com/resultado', datos)
        } catch (error) {
            console.log(error);
        }
        if (response.status === 200) {
            const { data } = response;
            console.log(data);
        } else {

        }
    }

    return (
        <Fragment>
            <h1>Formulario</h1>
            <div className="row">
                <div className="col-md-3">
                    <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Apellido" className="form-control" onChange={handleInputChange} name="apellido"></input>
                </div>
                <button onClick={enviarDatos} className="btn btn-primary">Enviar</button>
            </div>
            <ul>
                <li>{datos.nombre}</li>
                <li>{datos.apellido}</li>
            </ul>
        </Fragment>
    );
}
 
export default Formulario;