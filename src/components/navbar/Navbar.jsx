import MenuIcon from '@material-ui/icons/Menu';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavbarComponent = () => {

    const [dropdownOpen, setDropdownOpen] = useState (false);
    const toggle = () => setDropdownOpen (prevState => !prevState);

    return (
        <>
            <div id="navbar">
                <div className="navbar__all">
                    <Dropdown direction="right" isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle id="all"><MenuIcon className="nav__icon" style={{fontSize: 25}}/>Todo</DropdownToggle>
                        <DropdownMenu id="dropdownProducts">
                            <Link to={`/login`}><DropdownItem id="navbar__login">Hola, identificate</DropdownItem></Link>
                            <DropdownItem id="dropdownDivider" divider/>
                            <Link id="dropdown-item" to={`/categories/${'tecnologia'}`}><DropdownItem>Tecnología</DropdownItem></Link>
                            <Link id="dropdown-item" to={`/categories/${'moda'}`}><DropdownItem>Moda</DropdownItem></Link>
                            <Link id="dropdown-item" to={`/categories/${'videojuegos'}`}><DropdownItem>Videojuegos</DropdownItem></Link>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className="navbar__all__options">
                    <Link to={`/`} className="navbar__options">Ofertas del Día</Link>
                    <Link to={`/`} className="navbar__options">Servicio al Cliente</Link>
                    <Link to={`/`} className="navbar__options">Tarjetas de Regalo</Link>
                    <Link to={`/`} className="navbar__options">Vender</Link>
                    <Link to={`/`} className="navbar__options">Listas</Link>
                </div>
            </div>
        </>
    )
}

export default NavbarComponent;