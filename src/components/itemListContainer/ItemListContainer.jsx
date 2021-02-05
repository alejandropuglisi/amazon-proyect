import {useEffect, useState} from 'react';
import Database from '../falseDatabase/database';
import ItemListComponent from '../itemList/ItemList';

const ItemListContainerComponent = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        const itemsPromise = new Promise ((resolve, reject) => {
            setTimeout (() => resolve(Database), 2000);
        });
        
        itemsPromise.then((result) => setItems(result));
    }, [])

    return (
        <>
            <ItemListComponent items={items}/>
        </>
    )
}

export default ItemListContainerComponent;