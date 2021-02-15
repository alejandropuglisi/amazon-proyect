import './App.css';
import  { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeaderComponent from './components/header/Header';
import ItemListContainerComponent from './components/itemListContainer/ItemListContainer';
import ItemDetailContainerComponent from './components/itemDetailContainer/ItemDetailContainer';
import FooterComponent from './components/footer/Footer';
import NavbarComponent from './components/navbar/Navbar';
import LoginComponent from './components/login/Login';
import CartComponent from './components/cart/Cart';

const App = () => {

  return (
    <>
        <BrowserRouter>

          <Switch>
            
            <Route path="/login" component={LoginComponent}/>

          </Switch>
            
            <HeaderComponent />

            <NavbarComponent />

          <Switch>
                     
            <Route exact path="/" component={ItemListContainerComponent}/>
           
            <Route path="/categories/:categoryId" component={ItemListContainerComponent}/>
    
            <Route path="/item/:id" component={ItemDetailContainerComponent}/>

            <Route path="/cart" component={CartComponent}/>

          </Switch>

          <FooterComponent />

        </BrowserRouter>
    </>
  );
}

export default App;