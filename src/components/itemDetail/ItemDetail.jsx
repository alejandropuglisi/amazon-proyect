import './ItemDetail.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ItemCountComponent from '../itemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetailComponent = ({item}) => {

    const [goToCart, setGoToCart] = useState (false);

    const onAdd = (count) => {
        console.log('Se agregaron ', count, ' productos al carrito');
        setGoToCart(true);
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
                    <div className="item__stock">
                        <select className="stock" name="stock" id="">
                            <option value="">Cantidad: 1</option>
                            <option className="stock__option" value="">1</option>
                            <option className="stock__option" value="">2</option>
                            <option className="stock__option" value="">3</option>
                            <option className="stock__option" value="">4</option>
                            <option className="stock__option" value="">5</option>
                        </select>
                    </div>
                    <div className="buttons">
                        {goToCart ? <Link to={'/cart'}><button className="item__button2"><PlayArrowIcon className="icon2" style={{fontSize: 25}} />Finalizar compra</button></Link> : <ItemCountComponent stock={item.stock} onAdd={onAdd} className="item__button1" />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetailComponent;