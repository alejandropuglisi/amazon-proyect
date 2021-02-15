import {useEffect, useState} from 'react';
import Database from '../falseDatabase/database';
import ItemDetailComponent from '../itemDetail/ItemDetail';
import {useParams} from 'react-router-dom';

const ItemDetailContainerComponent = () => {

    const [item, setItem] = useState([])

    const {id} = useParams()

    useEffect(() => {
        const getItem = new Promise ((resolve, reject) => {
            resolve(Database)
        });
        
        getItem.then((result) => {
            setItem(result.find((product) => product.id === Number(id)))
        })
    }, [id]);

    return (
        <>
            <ItemDetailComponent item={item} />
        </>
    )
}

export default ItemDetailContainerComponent;