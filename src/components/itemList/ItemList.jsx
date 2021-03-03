import './ItemList.css';
import ItemComponent from '../Item/Item';
import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';

const ItemListComponent = () => {

    const {products} = useContext(ProductsContext);

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