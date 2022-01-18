import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';

const Formulario = () => {


    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })
    const [error, setError] = useState(false)

    useEffect(() => {
        if (datos.nombre > 3) {
            setError(false)
        } else {
            setError(true)
        }
    }, [datos.nombre])

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,  
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = async () => {
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

    const enviarDatosC = async (event, type) => {
        let response;
        try {
            response = await axios[type]('www.ruta.com/resultado', datos)
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
                {error === true ? <p>Hay un error con tu nombre</p> : null}
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