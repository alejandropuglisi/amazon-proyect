import './ItemListContainer.css';
import ItemListComponent from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFirebaseContext } from '../../context/FirebaseContext';
/*import LoadingComponent from '../../components/Loading/Loading';*/

const ItemListContainerComponent = () => {
    const {categoryId} = useParams();
    const {getAllItems, getItemsByCategory } = useFirebaseContext();
    const [products, setProducts] = useState([]);
    /*const [loading, setLoading] = useState(true);*/
     
    useEffect(() => {
        if (categoryId) {
            getItemsByCategory(categoryId).then((querySnapshot) => {
                if (querySnapshot.length === 0) {
                    console.log('Error');
                } else {
                    if (querySnapshot.docs.length > 0) {
                        setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
                    } else {
                        setProducts([]);
                    }
                }
            }).catch(error => console.log(error));
        } else {
            getAllItems().then((result) => {
                setProducts(result);
            }).catch(error => console.log(error));
        }
    }, [categoryId]);

    return (
        <>
            {!products? 
                <h1>No se encontraron productos</h1>
            :
                <ItemListComponent products={products} />
            }
        </>
    )
}

export default ItemListContainerComponent;