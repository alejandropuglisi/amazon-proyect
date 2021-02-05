import './Item.css';

const ItemComponent = ({item}) => {

    return (
        <>
            <div className="item">
                <div className="item__info">
                <img className="item__img" src={item.image} alt=""/>
                    <p>{item.title}</p>
                    <p>
                        <small>U$S</small>
                        <strong className="item__price">{item.price}</strong>
                    </p>
                </div>
            </div>
        </>
    )
}

export default ItemComponent;