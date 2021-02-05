import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

const HeaderComponent = () => {

    return (
        <>
            <nav className="header">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"/>
                <LocationOnOutlinedIcon className="header__option__shipping" />
                    <div className="header__options">
                        <span className="header__option__greeting">Enviar a</span>
                        <span className="header__option__login">Argentina</span>
                    </div>
                <div className="header__search">
                    <input type="text" className="header__search__input"/>
                    <SearchIcon className="header__search__icon"/>
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
                <div className="header__option__cart">
                    <AddShoppingCartIcon style={{fontSize: 35}} /> 
                    <span className="header__option__login header__option__cart-count">2</span>
                </div>
            </nav>
        </>
    )
}

export default HeaderComponent;