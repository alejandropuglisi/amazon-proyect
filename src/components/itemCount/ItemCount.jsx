import './ItemCount.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useState } from 'react';

const ItemCountComponent = ({stock, onAdd}) => {

    const [count, setCount] = useState (1);

    const add = (stock) => {
        if (count < stock) {
            setCount(count + 1);
        } else {
        console.log('Out of stock');
        }
    }

    const substract = () => {
        if (count > 1) {
            setCount(count - 1);
        } else {
        console.log('No se puede agregar menos de 1 producto')
        }
    }

    const handlerOnAdd = () => {
        onAdd(count)
    }

    return (
        <>
            <div className="container-count">
                <button className="buttonCount" onClick={substract}>-</button>
                <p className="counter">{count}</p>
                <button className="buttonCount" onClick={() => {add (stock) }}>+</button>
            </div>
            <button className="item__button1" onClick={handlerOnAdd}><ShoppingCartIcon className="icon" style={{fontSize: 25}} />Agregar al Carrito</button>
        </>
    )
}

export default ItemCountComponent;