import './Item.css';
import { Link } from 'react-router-dom';

const ItemComponent = ({item}) => {
    return (
        <>
            <Link to={`/item/${item.id}`} className="item">
                <div>
                    <div className="item__info">
                    <img className="item__img" src={item.image} alt=""/>
                        <p>{item.title}</p>
                        <p>
                            <small>U$S</small>
                            <strong className="item__price">{item.price}<span className="item__td2"> + U$S {item.shipping} de envío</span></strong>
                        </p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ItemComponent;