import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import EmptyCartComponent from '../EmptyCart/EmptyCart';
import FullCartComponent from '../FullCart/FullCart';

const CartComponent = () => {

    const {cart} = useContext(CartContext);

    /*const checkout = () => {
        let order = 
    }*/

    return (
        <>
            <div className="cart-container">
                {cart.length <= 0 ? <EmptyCartComponent />
                : <FullCartComponent />}
            </div>
        </>
    )
}

export default CartComponent;