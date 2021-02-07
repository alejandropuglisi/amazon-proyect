import {useEffect, useState} from 'react';
import Database from '../falseDatabase/database';
import ItemDetailComponent from '../itemDetail/ItemDetail';

const ItemDetailContainerComponent = () => {

    const [item, setItem] = useState([])

    useEffect(() => {
        const getItem = new Promise ((resolve, reject) => {
            setTimeout (() => resolve(Database), 2000);
        });
        
        getItem.then((result) => setItem(result[2]));
    }, [])

    return (
        <>
            <ItemDetailComponent item={item}/>
        </>
    )
}

export default ItemDetailContainerComponent;