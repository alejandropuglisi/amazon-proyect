import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import Database from '../FalseDatabase/database';
import ItemListComponent from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainerComponent = () => {

    const {categoryId} = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const itemsPromise = new Promise ((resolve, reject) => {
            resolve(Database);
        });
        
        itemsPromise.then((result) => {
            if(categoryId) {
                let productsCategory = result.filter(product => product.category == categoryId);
                setItems(productsCategory);

            } else {
                setItems(result);
            }

        })
    }, [categoryId]);

    return (
        <>
            {items == "" && 
            <h1>No se encontraron productos</h1>
            }
            {items && 
            <ItemListComponent items={items} />
            }
        </>
    )
}

export default ItemListContainerComponent;