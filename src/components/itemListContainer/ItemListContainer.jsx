import './ItemListContainer.css';
import ItemListComponent from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../context/ProductsContext';
import { useContext } from 'react';

const ItemListContainerComponent = () => {

    const {products} = useContext(ProductsContext);

    const {categoryId} = useParams();
    
    return (
        <>
            {products == "" && 
            <h1>No se encontraron productos</h1>
            }
            {products && 
            <ItemListComponent />
            }
        </>
    )
}

export default ItemListContainerComponent;