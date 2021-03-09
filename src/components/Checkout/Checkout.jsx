import './Checkout.css';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useFirebaseContext } from "../../context/FirebaseContext";
import { useHistory } from "react-router-dom";

const CheckoutComponent = () => {

    const { cart, clearCart } = useContext(CartContext);
    const { updateStock, createOrder } = useFirebaseContext();
    const history = useHistory();

    const handleCheckout = () => { 
        let newOrder = { buyer: [{
            name: 'Alejandro',
            phone: '+54 9 123456',
            email: 'alejandro@gmail.com'
          }],
            items: [...cart],
            total: cart.totalPrice
        }
    
        updateStock(cart)
        .then((result) =>{
          return createOrder(newOrder);
        })
        .then((result) => {
          console.log(`Se creo la orden compra #${result.id}`);
          clearCart();
          history.push('/checkout');
        });
      }

    return (
        <>
            <div>
                <button onClick={handleCheckout}>Confirmar compra</button>
            </div>
        </>
    );
};

export default CheckoutComponent;