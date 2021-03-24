import { useEffect, useState } from 'react';
import ItemDetailComponent from '../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { useFirebaseContext } from '../../context/FirebaseContext';
import LoadingComponent from '../../components/Loading/Loading';

const ItemDetailContainerComponent = () => {

    const [ item, setItem ] = useState([])
    const { id } = useParams();
    const { getItemByID } = useFirebaseContext();
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        setLoading(true);
        getItemByID(id).then((querySnapshot) => {
            setItem({id: querySnapshot.id, ...querySnapshot.data()});
        }).catch(error => console.log(error)).finally(() => setLoading(false))
    }, [id]);

    if (loading)
        {
            return (
                <LoadingComponent />
            )
        }

    return (
        <>
            <ItemDetailComponent item={item} />
        </>
    )
}

export default ItemDetailContainerComponent;