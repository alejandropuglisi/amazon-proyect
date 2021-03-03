import { createContext, useState, useEffect } from 'react';
import { getFirestore } from '../firebase/firebase';

export const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState([]);
    
    useEffect (() => { 
        
        const database = getFirestore(); 

        const itemsHome = database.collection('ITEM');

        itemsHome.get().then((value) => {
            let productsHome = value.docs.map(product => {
                return {...product.data(), id: product.id};
            });
                console.log(productsHome)
                setProducts(productsHome);
        });
    }, []);

    const [item, setItem] = useState([]);

    useEffect(() => {

        const database = getFirestore();

        const chainingTables = database.collection('ITEM');
        
        chainingTables.get().then((value) => {
            let productsByCategory = value.docs.map ( async (product) => {
                const categoriesCollection = database.collection('CATEGORIAS')
                let addingCategory = await categoriesCollection.doc(product.data().categoryID).get()
                    return {...product.data(), category: addingCategory.data()};
            });
            setItem(productsByCategory);
        });
    }, []);

    return <ProductsContext.Provider value={{products, item}}>
        {children}
    </ProductsContext.Provider>
};