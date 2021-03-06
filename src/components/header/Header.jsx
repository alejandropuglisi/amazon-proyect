import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Link, useHistory } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext, useState } from 'react';

const HeaderComponent = () => {

    const history = useHistory();
    const [itemsSearched, setItemsSearched] = useState('');
    const handleInputSearch = (e) => {
        setItemsSearched(e.target.value);
    }

    const handleBtnSearch = () => history.push(`/search/${itemsSearched}`);

    const {cart} = useContext(CartContext);

    return (
        <>
            <nav className="header">
                <Link to={`/`}><img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"/></Link>
                <LocationOnOutlinedIcon className="header__option__shipping" />
                    <div className="header__options">
                        <span className="header__option__greeting">Enviar a</span>
                        <span className="header__option__login">Argentina</span>
                    </div>
                <div className="header__search">
                    <input value={itemsSearched} onChange={handleInputSearch} type="text" className="header__search__input"/>
                    <SearchIcon className="header__search__icon" onClick={handleBtnSearch}/>
                </div>
                <div className="header__nav">
                    <div className="header__options">
                        <span className="header__option__greeting">Hola, identifícate</span>
                        <span className="header__option__login">Iniciar sesión</span>
                    </div>
                    <div className="header__options">
                        <span className="header__option__greeting">Devoluciones</span>
                        <span className="header__option__login">y Pedidos</span>
                    </div>
                </div>
                {(cart.length) <= 0 ? <div className="header__option__login">Carrito vacío</div>
                :
                <div className="header__option__cart">
                    <Link to={`/cart`}><AddShoppingCartIcon id="cart-widget" style={{fontSize: 35}} /></Link>
                    <span className="header__option__login header__option__cart-count">{cart.totalItems}</span>
                    <span className="header__option__login header__option__cart-total">U$S&nbsp;<span>{cart.totalPrice}</span></span>
                </div>}
            </nav>
        </>
    )
}

export default HeaderComponent;