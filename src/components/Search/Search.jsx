/*import "../Cart/Cart.css";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Database from '../FalseDatabase/database';
import ItemListComponent from '../ItemList/ItemList';

const SearchComponent = () => {

    const {keyword} = useParams();
    const [search, setSearch] = useState([]);

    useEffect(() => {
        const itemsPromise = new Promise ((resolve, reject) => {
            resolve(Database);
        });
        
        itemsPromise.then((result) => {
            if(keyword) {
                let productSearched = result.filter(product => product.title || product.description == keyword);
                setSearch(productSearched);
            }
        })
    }, [keyword]);
    

  return (
    <>
        {search == "" && 
        <>
        <h1>No se encontraron productos</h1>
        <p>Realizá una nueva búsqueda</p>
        </>}
        {search && 
        <ItemListComponent search={search} />}
    </>
  );
}

export default SearchComponent;*/