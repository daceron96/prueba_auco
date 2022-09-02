import React from 'react';

const Questions = () => {
    return (
        <div className='row'>
            <h2>Preguntas...</h2>
            <div className='mt-3 col-6 text-start'>
                <h5>1. Describa 5 funciones de agregación de MongoDB</h5>
                <p>No he manejando la tecnología de MongoDB, seria uno de mis siguientes objetivos</p>
            </div>
            <div className='mt-3 col-6 text-start'>
                <h5>2. Explique las diferencias entre las funciones sincronas y asíncronas</h5>
                <p>Una funcion sincrona es una funcion bloqueante lo cual quiere decir que para poder seguir
                el flujo normal del proceso esta debe terminar, mientras que la funcion asíncrona se corre en un hilo aparte
                osea se ejecuta en paralelo al hilo principal del proceso</p>
            </div>
            
            <div className='mt-3 col-6 text-start'>
                <h5>3. Qué métodos de seguridad se pueden utilizar en los consumos de servicios rest.</h5>
                <p>1. Guardar y validar credenciales en una base de datos</p>
                <p>2. Autenticacion OTP la cual es generar una contraseña pero esta solo es valida para un usuarios
                por lo cual para un nuevo ingreso se debera crear una nueva</p>
                <p>3. Validacion de token el cual sera único y sea asignado cada que vez que se incie sesion
                este ademas puede vencer en un tiempo lo cual obligaria a crear un nuevo token</p>
                <p>4. Hacer peticion de tipo POST </p>
            </div>
        </div>
    );
}

export default Questions;
