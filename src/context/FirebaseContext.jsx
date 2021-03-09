import React, { useContext } from 'react';
import { getFirestore } from '../firebase/firebase';
import firebase from 'firebase/app';
import sha1 from 'sha1';

export const FirebaseContext = React.createContext(false);
export const useFirebaseContext = () => useContext(FirebaseContext);

const FirebaseProvider = ({ children }) => {

    const db = getFirestore();
 
    /* Items */
    const getAllItems = () => {
        return new Promise((resolve, reject) => {
            let categorias = [];
            getAllCategories().then((result) => {
                categorias = result;
                return db.collection('ITEM').get();  
            })
           .then((querySnapshot) => {
                if (querySnapshot.length === 0) {
                    reject('No hay datos');
                } else {
                    let products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    resolve(products.map((product) => {
                        let category = categorias.find((category) => category.id == product.categoryID);                        
                        return {...product, categoryName: category.name }
                    }));
                };
            });
        });   
    }

    const getItemByID = (itemId) => {
        return db.collection('ITEM').doc(itemId).get();
    }

    const getItemsByCategory = (category) => {
        return new Promise( async(resolve, reject) => {
            let query = await db.collection('CATEGORIAS').where("name", "==", category).get();
            if (query.docs.length > 0) {
                let result = query.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                let categoryID = result[0].id;                
                resolve(db.collection('ITEM').where('categoryID', '==', categoryID).get());
            }
        });
    }

    const updateStock = (cart) => {
        return new Promise((resolve, reject) => {
            cart.map(async(cartItem) => {
                let query = await db.collection('ITEM').doc(cartItem.item.id).get();
                if (!query.empty) {
                    const productData = query.data();
                    if (productData.stock >= cartItem.quantity) {
                        productData.stock -= cartItem.quantity;
                        try {
                            await db.collection('ITEM').doc(cartItem.item.id).update({ stock: productData.stock });
                        } catch(e) {
                            reject('Error al operar sobre la Base de Datos');
                        }
                    }
                    else {
                        reject(`No existen suficientes ${productData.title} para cubrir la demanda`);
                    }
                } else {
                    reject('No existe el producto en la DB');
                }
            })
            resolve(true);
        });
    }

    /*Orders*/
    const createOrder = async(data) => {
        return new Promise(async(resolve, reject) => {
            const newOrder = {
                ...data,
                date: firebase.firestore.Timestamp.fromDate(new Date())
            }
            const res = await db.collection('ORDERS').add(newOrder);
            if (res.id) {
                resolve({ id: res.id, ...newOrder });
            } else {
                reject('Error al almacenar en Firebase');
            }
        });
    }

    /*Users*/
    const registerUser = (data) => {
        return new Promise(async(resolve, reject) => {
            const res = await db.collection('USERS').add(data);
            data.password = sha1(data.password);
            if (res.id) {
                localStorage.setItem('user', JSON.stringify({ id: res.id, nombre: data.nombre, phone: data.phone, email: data.email }));
                resolve({ id: res.id, nombre: data.nombre, phone: data.phone, email: data.email });
            } else {
                reject('Error al almacenar en Firebase');
            }
        });
    }

    const loginUser = (data) => {
        return new Promise(async(resolve, reject) => {
            data.password = sha1(data.password);
            const query =  await db.collection('USERS').where('email', '==', data.email).get();
            if (!query.empty) {
                const snapshot = query.docs[0];
                const userData = snapshot.data();
                if (data.password == userData.password) {
                    localStorage.setItem('user', JSON.stringify({ id: snapshot.id, nombre: userData.nombre, phone: userData.phone, email: userData.email }));
                    resolve({ id: snapshot.id, nombre: userData.nombre, phone: userData.phone, email: userData.email });
                } else {
                    reject('Usuario/Contraseña no válidos');
                }
            } else {
                reject('Usuario/Contraseña no válidos');
            }
        });
    }


    /* Categories */
    const getAllCategories = () => {
        return new Promise( (resolve, reject) => {
            db.collection('CATEGORIAS').get().then((querySnapshot) => {
                if (querySnapshot.length === 0) {
                    console.log('No hay datos');
                } else {
                    let result = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    resolve(result);
                };
            });
        });   
    }

    return (
        <FirebaseContext.Provider value={{ getAllItems, getItemByID, getItemsByCategory, updateStock, createOrder, registerUser, loginUser}}>
            {children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseProvider;