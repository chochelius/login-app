import React, { useState } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Login = ({ onSubmit }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(email+" "+password);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email, password });
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
                                        <label htmlFor="email" className="form-label">Correo electrónico</label>
                                        <input
                                            id="email"
                                            placeholder='email'
                                            type="text"
                                            className="form-control"
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                console.log(email);
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
                                            disabled={!email.trim() || !password.trim()}
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