import '../navbar/Navbar.css';
import MenuIcon from '@material-ui/icons/Menu';

const NavbarComponent = () => {

    return (
        <>
            <div className="navbar">
                <div className="navbar__all">
                    <MenuIcon className="nav__icon" style={{fontSize: 25}}/>
                    <a className="all" href="#">Todo</a>
                </div>
                <div className="navbar__all__options">
                    <a className="navbar__options" href="#">Ofertas del Día</a>
                    <a className="navbar__options" href="#">Servicio al Cliente</a>
                    <a className="navbar__options" href="#">Tarjetas de Regalo</a>
                    <a className="navbar__options" href="#">Vender</a>
                    <a className="navbar__options" href="#">Listas</a>
                </div>
            </div>
        </>
    )
}

export default NavbarComponent;