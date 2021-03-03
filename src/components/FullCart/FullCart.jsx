import "../Cart/Cart.css";
import CartItemsComponent from "../CartItems/CartItems";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useFirebaseContext } from "../../context/FirebaseContext";

const FullCartComponent = () => {

  const { cart, clearCart } = useContext(CartContext);
  const { updateStock, createOrder } = useFirebaseContext();
  const history = useHistory();

  //const navigate = useNavigate();
  //navigate(-1)

  const handleCheckout = () => {
    //1-Crear la orden
    //2-Llamar a funcion de firebaseContext updateStock(cart)
    //3-Crear la orden
    //4-Llamar a la funcion de firebase context createOrder(newOrder;
    //Grabar la orden de compra
    let newOder = { buyer: [{
        name: 'Alejandro',
        phone: '+54 9 123456',
        email: 'alejandro@gmail.com'
      }],
      items: [...cart],
      total: cart.totalPrice
    }
    updateStock(cart)
    .then((result) =>{
      return createOrder(newOder);
    })
    .then((result) => {
      console.log(`Se creo la orden compra #${result.id}`);
      clearCart();
      history.push('/');
    });
  }

  return (
    <>
      <div className="item-container">
        <h2 className="cart__title2">
          Carrito
          <button className="clear-cart" onClick={clearCart}>
            Vaciar carrito
          </button>
        </h2>
        <p className="item__td1 cart__price">Precio</p>
        <div className="cart-item-container">
          {cart.map((cartItem) => {
            return <CartItemsComponent key={cartItem.id} cartItem={cartItem} />;
          })}
          <div className="cart__right">
            <button onClick={() => console.log('volver a la vista previa')} className="goToProducts">
                Volver a productos
            </button>
            <h2 className="subtotal">
              Subtotal {cart.length}
              {cart.length > 1 ? (
                <span> (productos): </span>
              ) : (
                <span> (producto): </span>
              )}
              <strong className="subtotal">U$S&nbsp;{cart.totalPrice}</strong>
            </h2>
          </div>
        </div>
      </div>
      <div className="cart__checkout">
        <h2 className="cart__checkout__items">
          Subtotal {cart.length}
          {cart.length > 1 ? (
            <span> (productos): </span>
          ) : (
            <span> (producto): </span>
          )}
          <strong className="cart__checkout__items">
            U$S&nbsp;{cart.totalPrice}
          </strong>
        </h2>
        <form>
          <label className="checkbox">
            <input className="checkbox" type="checkbox" />
            Este pedido es un regalo
          </label>
        </form>
        <button className="goToCheckout" onClick={handleCheckout}>Proceder al pago</button>
      </div>
    </>
  );
};

export default FullCartComponent;