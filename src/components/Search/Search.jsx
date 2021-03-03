import "../Cart/Cart.css";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemListComponent from '../ItemList/ItemList';
import { useFirebaseContext } from '../../context/FirebaseContext';

const SearchComponent = () => {

    const {keyword} = useParams();
    const [products, setProducts] = useState([]);
    const { getAllItems } = useFirebaseContext();

    useEffect(() => {
        getAllItems().then((products) => {
            if (products.length > 0) {
                console.log(products);
                setProducts(products.filter((product) =>
                    product.title.toLowerCase().indexOf(keyword.toLowerCase())>=0 || 
                    product.description.toLowerCase().indexOf(keyword.toLowerCase())>=0 ||
                    product.categoryName.toLowerCase().indexOf(keyword.toLowerCase())>=0
                ));
            }
        }).catch(error => console.log(error));
    }, [keyword]);
    

  return (
    <>
        {products.length == 0 ? 
            <>
                <h1>No se encontraron productos</h1>
                <p>Realizá una nueva búsqueda</p>
            </>
            :
            <>
                <h2>Resultados de la busqueda: {keyword}</h2>
                <ItemListComponent products={products} />
            </>
        }
    </>
  );
}

export default SearchComponent;