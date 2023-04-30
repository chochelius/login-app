import React, { useState } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Login = ({ onSubmit }) => {
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    console.log(usuario+" "+password);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ usuario, password });
    }

    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="col-md-4 mx-auto my-auto">
                        <div className='card mt-4 text-center'>
                            <div className='card-header'>
                                <h3>Iniciar Sesión</h3>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={handleSubmit}>
                                    <div className='mt-2'>
                                        <label htmlFor="usuario" className="form-label">Usuario</label>
                                        <input
                                            id="usuario"
                                            placeholder='Usuario'
                                            type="text"
                                            className="form-control"
                                            onChange={(e) => {
                                                setUsuario(e.target.value);
                                                console.log(usuario);
                                            }}
                                        />
                                    </div>
                                    <div className='mt-2'>
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input
                                            type='password'
                                            id='password'
                                            className='form-control'
                                            placeholder='Password'
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                                console.log(e.target.value);
                                            }}
                                        /> 
                                        <div>
                                        <button
                                            type="submit"
                                            className="btn btn-primary w-100 mt-2"
                                            data-bs-target="#myModal"
                                            data-bs-toggle="modal"
                                            disabled={!usuario.trim() || !password.trim()}
                                            >
                                            Iniciar Sesión
                                        </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;