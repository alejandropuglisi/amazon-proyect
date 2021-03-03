import './ItemDetail.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ItemCountComponent from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const ItemDetailComponent = ({item}) => {

    const {addItem} = useContext(CartContext);
    const [count, setCount] = useState(1);
    const [goToCart, setGoToCart] = useState (false);

    const add = () => {
        if (count < item.stock) {
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

    const onAddToCart = () => {
        setGoToCart(true);
        addItem(item, count);
        setCount(1);
    }

    return (
        <>
            <div className="item__grid__container">
                <div className="item__images">
                    <img className="little-images" src={item.image} alt=""/>
                    <img className="little-images" src={item.image} alt=""/>
                    <img className="little-images" src={item.image} alt=""/>
                    <img className="little-images" src={item.image} alt=""/>
                </div>
                <div>
                    <div className="item__img2">
                        <img className="item__img2" src={item.image} alt=""/>
                        <p className="item__td1 center">Pasa el mouse encima de la imagen para aplicar zoom</p>
                    </div>
                </div>
                <div>
                    <div className="item__description">
                        <p className="item__description">{item.description}</p>
                        <p className="item__a">Visita la tienda de "brand"</p>
                        <hr />
                    </div>
                    <div className="item__price1">
                        <p className="item__td1">Precio:&nbsp;<span className="item__price1">U$S&nbsp;{item.price}</span>
                        <span className="item__shipping1"> + U$S {item.shipping} de envío y depósito de derechos de importación a Argentina <span className="item__a"> Detalles</span></span></p>
                    </div>
                    <div className="item__p1">
                        <p>Disponible a un precio menor de <span className="item__a">otros vendedores</span> que podrían no ofrecer envío Prime gratis.</p>
                    </div>
                    <div className="item__p2">
                        <p>CPU: <strong>CPU</strong></p>
                        <p>Marca: <strong>brand</strong></p>
                        <p>Sistema Operativo: <strong>system</strong></p>
                        <p>Pantalla: <strong>display</strong></p>
                        <hr />
                    </div>
                    <div className="item__p3">
                        <p className="item__about">Sobre este artículo: </p> 
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloremque dignissimos similique reprehenderit, soluta iste autem voluptas ab adipisci fuga architecto quod vel! Officiis explicabo aliquid sed voluptates tempore a!</p>
                    </div>
                </div>
                <div className="border-column3">
                    <div className="item__price2">
                        <p>U$S&nbsp;{item.price}</p>
                    </div>
                    <div className="item__shipping2">
                        <p className="item__td2"> + U$S {item.shipping} de envío y depósito de derechos de importación a Argentina <span className="item__a"> Detalles</span></p>
                        <p className="item__p2">Llega: <strong>feb 10-17</strong></p>
                        <p className="item__available">Disponible</p>
                    </div>
                    <div className="buttons">
                        {goToCart ?
                            <Link to={'/cart'}><button className="item__button2"><PlayArrowIcon className="icon2" style={{fontSize: 25}} />Finalizar compra</button></Link>
                        :   
                        <>
                            <ItemCountComponent stock={item.stock} add={add} substract={substract} count={count} className="item__button1" /> 
                            <button onClick={onAddToCart} className="item__button1"><ShoppingCartIcon className="icon" style={{fontSize: 25}} />Agregar al Carrito</button>
                        </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetailComponent;