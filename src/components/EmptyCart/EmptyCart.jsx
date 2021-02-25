import { Link } from 'react-router-dom';
import '../Cart/Cart.css';

const EmptyCartComponent = () => {

    return (
        <>
            <div className="cart__left">
                <h2 className="cart__title">Tu carrito de Amazon está vacío</h2>
                <p className="cart__subtitle">Continúa comprando en <Link to={`/`}>amazon.com</Link></p>
            </div> 
        </>
    )
}
    
export default EmptyCartComponent;    