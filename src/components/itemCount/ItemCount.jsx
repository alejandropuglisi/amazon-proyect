import './ItemCount.css';

const ItemCountComponent = ({stock, add, substract, count}) => {

    return (
        <>
            <div className="container-count">
                <button className="buttonCount" onClick={substract}>-</button>
                <p className="counter">{count}</p>
                <button className="buttonCount" onClick={() => {add (stock) }}>+</button>
            </div>
        </>
    )
}

export default ItemCountComponent;