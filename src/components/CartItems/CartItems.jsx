import './CartItems.css';
import '../ItemDetail/ItemDetail.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItemsComponent = ({cartItem}) => {

    const {removeItem} = useContext(CartContext);

    const handlerRemoveItem = () => {
        removeItem(cartItem.item.id)
    }

    return (
        <>
            <div className="items-container">
                <img className="cart__img" src={cartItem.item.image} alt=""/>
                <div className="cart__description-container">
                    <p className="cart__description">{cartItem.item.description}</p>
                    <button className="delete-item" onClick={handlerRemoveItem}>Eliminar producto</button>
                    <button className="delete-item">Guardar en Favoritos</button>
                    <button className="delete-item">Cantidad: {cartItem.quantity}</button>
                </div>
                <p className="cart__price2">U$S&nbsp;{cartItem.item.price}</p>
            </div>
        </>
    );
};

export default CartItemsComponent;