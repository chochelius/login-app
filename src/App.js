import React from 'react';
import './App.css';
import Alerta from './components/alerta/Alerta';
import Login from './components/login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [alerta, setAlerta] = useState('');
  const [aletaType, setAlertaType] = useState('');

  const validarLogin = ( {usuario, password} ) => {
    const usuarioValido = 'admin';
    const passwordValido = 'admin';
    if (usuario === usuarioValido && password === passwordValido) {
      setAlerta('Bienvenido');
      setAlertaType('Administrador');
    } else {
      setAlerta('Usuario o contraseña incorrectos');
      setAlertaType('Error');
      console.log(console.log(usuario +  password))
    }
  }


  return (
    <div className=' anim_gradient'>
      <div className="App">
        <Login onSubmit={validarLogin} />
        <Alerta alerta={alerta} alertaType={aletaType} />
      </div>
    </div>
  );
}

export default App;