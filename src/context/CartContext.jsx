import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();
export const CartProvider = ({ defaultValue = [], children }) => {

    const cartLocalStorage = JSON.parse(localStorage.getItem('cart'));
    const [cart, setCart] = useState(cartLocalStorage && cartLocalStorage.length > 0 ? cartLocalStorage : defaultValue);

    cart.totalPrice = cart.length > 0 ? cart.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.item.price), 0) : '';
    cart.totalItems = cart.length > 0 ? cart.reduce((totalItemsCart, cartItem) => totalItemsCart + cartItem.quantity, 0) : '';

    const userLocalStorage = JSON.parse(localStorage.getItem('user'));
    const [loggedUser, setLoggedUser] = useState(userLocalStorage? userLocalStorage : defaultValue);

    const addItem = (item, quantity) => {
        if (!isInCart (item.id)) {
            const newCart = [...cart, {item:item, quantity:quantity}];
            setCart(newCart);
        } else {
            setCart(cart.map(cartItem => {
                if (cartItem.item.id == item.id) {
                    return {...cartItem, quantity:cartItem.quantity + quantity};
                } else {
                    return cartItem;
                };
            }));
        };
    };

    const isInCart = (id) => {
        return cart.findIndex(cartItem => cartItem.item.id == id) >= 0 ? true : false;
    };

    const removeItem = (itemId) => {
        setCart(cart.filter(itemRemoved => itemRemoved.item.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
        localStorage.setItem('cart', JSON.stringify([]));
    };

    const setUser = (user) => {
        setLoggedUser(user);
        localStorage.setItem('user', JSON.stringify(user));
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart, loggedUser]);

    return <CartContext.Provider value={{cart, loggedUser, addItem, clearCart, removeItem, setUser}}>
        {children}
    </CartContext.Provider>
};