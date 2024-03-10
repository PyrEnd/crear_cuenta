import React, { useState } from "react"
import SocialButton from "./SocialButton";

const Formulario = ({setAlert}) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const validate = (e) => {
        e.preventDefault();


        if(
        nombre.trim() === "" || 
        email.trim() === "" || 
        password.trim() === "" || 
        confirmPassword.trim() === ""
        ){
            setAlert({msg: "Rellena todos los campos", color: "warning"})
            return;
        }

        if(password !== confirmPassword){
            setAlert({msg: "Las contraseñas no coinciden", color: "danger"})
            return;
        }

        setAlert({msg: "¡Guardado con éxito!", color: "success"})
            setNombre("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
    };

    return (
        <>
            <div className="main-container d-flex flex-column">
            <h1 className='pb-2'>Crea una cuenta</h1>
                <div className="d-flex flex-row justify-content-around">
                    <div className="circle">
                    <SocialButton icon='linkedin' />
                    </div>

                    <div className="circle d-flex justify-content-center align-items-center">
                    <SocialButton icon='facebook' />
                    </div>

                    <div className="circle">
                    <SocialButton icon='github' />
                    </div>
                </div>
            <p>O usa tu email para registrarte</p>

                <form onSubmit={validate}>

                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        placeholder="Ingresa tu nombre"
                        onChange={(e)=>setNombre(e.target.value)}
                        value={nombre}
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        placeholder="Email"
                        onChange={(e)=>setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        placeholder="Contraseña"
                        onChange={(e)=>setPassword(e.target.value)}
                        value={password}
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="inputPassword2"
                        placeholder="Confirma tu contraseña"
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                    />
                </div>

                <button type="submit" className="btn btn-success" id="boton-enviar">
                    Registrarse
                </button>
            </form>
            </div>
        </>
    )
}

export default Formulario
