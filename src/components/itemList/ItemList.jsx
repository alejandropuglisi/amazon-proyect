import './ItemList.css';
import ItemComponent from '../item/Item';

const ItemListComponent = ({items, categories}) => {

    return (
        <>
            <div className="item__row">{items.map((item) => {
                return <ItemComponent className="item" key={item.id} item={item}/>
            })}
            </div>
        </>
    );
};

export default ItemListComponent;