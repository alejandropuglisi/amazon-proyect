import "../Cart/Cart.css";
import CartItemsComponent from "../CartItems/CartItems";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const FullCartComponent = () => {

  const { cart, clearCart } = useContext(CartContext);
  
  const historyGoBack = () => {
    window.history.go(-2);
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
            <button onClick={historyGoBack} className="goToProducts">
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
        <Link to={`/checkout`}><button className="goToCheckout">Proceder al pago</button></Link>
      </div>
    </>
  );
};

export default FullCartComponent;