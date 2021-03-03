import {useEffect, useState} from 'react';
import ItemDetailComponent from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import { useFirebaseContext } from '../../context/FirebaseContext';

const ItemDetailContainerComponent = () => {

    const [item, setItem] = useState([])
    const {id} = useParams();
    const { getItemByID } = useFirebaseContext();

    useEffect(() => {
        getItemByID(id).then((querySnapshot) => {
            setItem({id: querySnapshot.id, ...querySnapshot.data()});
        }).catch(error => console.log(error))
    }, [id]);

    return (
        <>
            <ItemDetailComponent item={item} />
        </>
    )
}

export default ItemDetailContainerComponent;