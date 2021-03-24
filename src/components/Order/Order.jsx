import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useFirebaseContext } from "../../context/FirebaseContext";
import LoadingComponent from '../../components/Loading/Loading';

const OrderComponent = () => {

    const [ order, setOrder ] = useState({});
    const { getOrderByID } = useFirebaseContext();
    const { orderId } = useParams();
    const [ loading, setLoading ] = useState(true);
 
    useEffect(() => {
        setLoading(true);
        getOrderByID(orderId).then((querySnapshot) => {
            setOrder({id: querySnapshot.id, ...querySnapshot.data()});
        }).catch(error => console.log(error)).finally(() => setLoading(false))
    }, []);

    if (loading)
        {
            return (
                <LoadingComponent />
            )
        }

    return (
        <>
            <div className="order__container">
                <h2 className="order__id">¡Muchas gracias por tu compra!</h2>
                <p className="order__subtitle">Tu número de orden es el #{order.id}</p>
                <p className="order__subtitle">Continúa comprando en <Link to={`/`}>amazon.com</Link></p>
            </div> 
        </>
    );
};

export default OrderComponent;