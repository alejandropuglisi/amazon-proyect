import './ItemList.css';
import ItemComponent from '../Item/Item';

const ItemListComponent = ({products}) => {

    return (
        <>
            <div className="item__row">{products.map((item) => {
                return <ItemComponent className="item" key={item.id} item={item}/>
            })}
            </div>
        </>
    );
};

export default ItemListComponent;