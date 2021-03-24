import './Checkout.css';
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useFirebaseContext } from "../../context/FirebaseContext";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input } from 'reactstrap';
import CartItemsComponent from "../CartItems/CartItems";

const CheckoutComponent = () => {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ adress, setAdress ] = useState('');
    const { cart, clearCart } = useContext(CartContext);
    const { updateStock, createOrder } = useFirebaseContext();
    const history = useHistory();

    const handleCheckout = () => { 
        let newOrder = { 
            buyer: [{
            name: name,
            email: email,
            phone: phone,
            adress: adress
          }],
            items: [...cart],
            total: cart.totalPrice
        }
    
        updateStock(cart).then((result) => {
          return createOrder(newOrder);
        })
        .then((result) => {
          clearCart();
          history.push(`/order/${result.id}`);
        });
      }

    return (
        <>
            <div className="checkout__container">
                <Form className="checkout__form__container">
                    <FormGroup>
                        <Label className="data" for="name">Nombre y Apellido</Label>
                        <Input className="checkout__input" type="text" name="email" id="nombreApellido" onChange={(e) => {setName(e.target.value)}}/>
                    </FormGroup>
                    <FormGroup>
                        <Label className="data" for="Email">Email</Label>
                        <Input className="checkout__input" type="email" name="email" id="email" onChange={(e) => {setEmail(e.target.value)}}/>
                    </FormGroup>
                    <FormGroup>
                        <Label className="data" for="phone">Teléfono</Label>
                        <Input className="checkout__input" type="text" name="phone" id="phone" onChange={(e) => {setPhone(e.target.value)}}/>
                    </FormGroup>
                    <FormGroup>
                        <Label className="data" for="adress">Dirección</Label>
                        <Input className="checkout__input" type="text" name="adress" id="adress" onChange={(e) => {setAdress(e.target.value)}}/>
                    </FormGroup>
                    <button className="checkout__button" onClick={handleCheckout}>Confirmar compra</button>
                </Form>
                <div className="checkout__item-container">
                    {cart.map((cartItem) => {
                        return <CartItemsComponent key={cartItem.id} cartItem={cartItem} />;
                    })}
                    <div className="checkout__cart__right">
                        <h2 className="subtotal">
                        Subtotal {cart.length}
                        {cart.length > 1 ? (
                            <span> (productos): </span>
                        ) : (
                            <span> (producto): </span>
                        )}
                        <strong className="checkout__subtotal">U$S&nbsp;{cart.totalPrice}</strong>
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckoutComponent;