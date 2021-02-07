import './ItemDetail.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const ItemDetailComponent = ({item}) => {

    return (
        <>
            <div className="item__grid__container">
                <div className="item__images">
                    <img className="little-images" src={item.image2} alt=""/>
                    <img className="little-images" src={item.image3} alt=""/>
                    <img className="little-images" src={item.image4} alt=""/>
                    <img className="little-images" src={item.image5} alt=""/>
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
                        <p className="item__a">Visita la tienda de Acer</p>
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
                        <p>CPU: <strong>{item.CPU}</strong></p>
                        <p>Marca: <strong>{item.brand}</strong></p>
                        <p>Sistema Operativo: <strong>{item.system}</strong></p>
                        <p>Pantalla: <strong>{item.display}</strong></p>
                        <hr />
                    </div>
                    <div className="item__p3">
                        <p className="item__about">Sobre este artículo: </p> 
                        <p>{item.about}</p>
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
                        <button className="item__button1"><ShoppingCartIcon className="icon" style={{fontSize: 25}} />Agregar al Carrito</button>
                        <button className="item__button2"><PlayArrowIcon className="icon2" style={{fontSize: 25}} />Comprar ahora</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetailComponent;