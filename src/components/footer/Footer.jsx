import React from 'react';
import './Footer.css';

const FooterComponent = () => {

    return (
        <>
            <div className="footer">
                <div className="footer__top">
                    <p className="footer__title">Inicio de Página</p>
                </div>
                <div className="footer__links">
                    <div className="footer__links__meetUs">
                        <span className="footer__links__titles">Conocenos</span>
                        <span className="footer__links__a">Trabaja en Amazon</span>
                        <span className="footer__links__a">Blog</span>
                        <span className="footer__links__a">Acerca de Amazon</span>
                        <span className="footer__links__a">Relaciones con los Inversionistas</span>
                        <span className="footer__links__a">Dispositivos Amazon</span>
                        <span className="footer__links__a">Amazon Tours</span>
                    </div>
                    <div className="footer__links__earnMoney">
                        <span className="footer__links__titles">Ganá Dinero con Nosotros</span>
                        <span className="footer__links__a">Vender productos en Amazon</span>
                        <span className="footer__links__a">Vender aplicaciones en Amazon</span>
                        <span className="footer__links__a">Programa de Afiliados</span>
                        <span className="footer__links__a">Anuncia tus Productos</span>
                        <span className="footer__links__a">Publica tu Libro en Kindle</span>
                        <span className="footer__links__a">Habilita un Amazon Hub</span>
                        <span className="footer__links__a">Ver más Gana Dinero con Nosotros</span>
                    </div>
                    <div className="footer__links__payProducts">
                        <span className="footer__links__titles">Productos de Pago de Amazon</span>
                        <span className="footer__links__a">Compra con Puntos</span>
                        <span className="footer__links__a">Recarga tu Saldo</span>
                        <span className="footer__links__a">Convertidor de Moneda de Amazon</span>
                    </div>
                    <div className="footer__links__canHelpU">
                        <span className="footer__links__titles">Podemos Ayudarte</span>
                        <span className="footer__links__a">Amazon y el COVID-19</span>
                        <span className="footer__links__a">Tu Cuenta</span>
                        <span className="footer__links__a">Tus Pedidos</span>
                        <span className="footer__links__a">Tarifas de Envío y Políticas</span>
                        <span className="footer__links__a">Devoluciones y Reemplazos</span>
                        <span className="footer__links__a">Administrar Contenido y Dispositivos</span>
                        <span className="footer__links__a">Amazon Assistant</span>
                        <span className="footer__links__a">Ayuda</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterComponent;