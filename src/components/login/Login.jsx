import React from 'react';
import '../login/Login.css';

const LoginComponent = () => {

    return (
        <>
            <div className="login">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="logo" className="login__logo"/>
                <div className="login__container">
                    <h1>Iniciar sesión</h1>
                    <form>
                        <h5>Email</h5>
                        <input className="login__input" type="email"/>
                        <h5>Password</h5>
                        <input className="login__input" type="password"/>
                        <button type="submit" className="login__button">Iniciar sesión</button>
                    </form>
                    <p className="login__p1">Al continuar, acepta las Condiciones de uso y el Aviso de privacidad de Amazon.</p>
                    <p className="login__p2">-------------------¿Nuevo en Amazon?-------------------</p>
                    <button className="login__register">Crea tu cuenta de Amazon</button>
                </div>
            </div>
        </>
    )
}

export default LoginComponent;