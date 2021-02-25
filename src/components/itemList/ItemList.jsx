import './ItemList.css';
import ItemComponent from '../Item/Item';

const ItemListComponent = ({items}) => {

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