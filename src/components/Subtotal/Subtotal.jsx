import './Subtotal.css';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const SubtotalComponent = ({cartItem}) => {

    const {cart} = useContext(CartContext);

    return (
        <>  
            <h2 className="subtotal">Subtotal {cart.length}
            {cart.length > 1 ? <span> (productos): </span> : <span> (producto): </span>}
            <strong>U$S&nbsp;{cartItem.item.price*cartItem.quantity}</strong>
            </h2>
        </>
    )
}

export default SubtotalComponent;