import React from 'react';
import './Alerta.css';
import 'bootstrap/dist/css/bootstrap.min.css'


const Alerta = (props) => {
    
        return (
<>
<div className="modal fade" id="myModal" tabIndex="-1" aria-labelledby="modal" aria-hidden="true">
                <div className={`modal-dialog modal-${props.alertaType}`}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modal">{props.alertaType}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            {props.alerta}
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
</>

        );

}

export default Alerta;