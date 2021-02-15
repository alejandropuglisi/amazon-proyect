import MenuIcon from '@material-ui/icons/Menu';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../navbar/Navbar.css';

const NavbarComponent = (item) => {

    const [dropdownOpen, setDropdownOpen] = useState (false);

    const toggle = () => setDropdownOpen (prevState => !prevState);

    return (
        <>
            <div className="navbar">
                <div className="navbar__all">
                    <Dropdown direction="right" isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle id="all"><MenuIcon className="nav__icon" style={{fontSize: 25}}/>Todo</DropdownToggle>
                        <DropdownMenu className="dropdownProducts">
                            <Link to={`/login`}><DropdownItem className="navbar__login">Hola, identificate</DropdownItem></Link>
                            <DropdownItem divider/>
                            <Link to={`/categories/${'tecnologia'}`}><DropdownItem>Tecnología</DropdownItem></Link>
                            <Link to={`/categories/${'moda'}`}><DropdownItem>Moda</DropdownItem></Link>
                            <Link to={`/categories/${'videojuegos'}`}><DropdownItem>Videojuegos</DropdownItem></Link>
                        </DropdownMenu>
                    </Dropdown>
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