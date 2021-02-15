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
                        <h5>Dirección de correo electrónico</h5>
                        <input className="login__input" type="email"/>
                        <h5>Password</h5>
                        <input className="login__input" type="password"/>
                        <button type="submit" className="login__button">Iniciar sesión</button>
                    </form>
                    <p className="login__p1">Al continuar, acepta las Condiciones de uso y el Aviso de privacidad de Amazon.</p>
                </div>
                <h6 className="line"><span>¿Eres nuevo en Amazon?</span></h6>
                <button className="login__register">Crea tu cuenta de Amazon</button>
            </div>
        </>
    )
}

export default LoginComponent;