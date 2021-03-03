import './App.css';
import  { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeaderComponent from './components/Header/Header';
import ItemListContainerComponent from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainerComponent from './components/ItemDetailContainer/ItemDetailContainer';
import FooterComponent from './components/Footer/Footer';
import NavbarComponent from './components/Navbar/Navbar';
import LoginComponent from './components/Login/Login';
import CartComponent from './components/Cart/Cart';
import SearchComponent from './components/Search/Search';
import CarouselPage from './components/Carousel/Carousel';
import { CartProvider } from './context/CartContext';
import FirebaseProvider from './context/FirebaseContext';

const App = () => {

  return (
    <>
      <FirebaseProvider>
        <CartProvider>
          <BrowserRouter>
            <Switch>              
              <Route path="/login" component={LoginComponent}/>
            </Switch>
          </BrowserRouter>            
          <BrowserRouter>
            <HeaderComponent />
            <NavbarComponent />
            <Switch>
              <Route exact path="/">
                <CarouselPage />
                <ItemListContainerComponent />                
              </Route>            
              <Route path="/categories/:categoryId">                
                <ItemListContainerComponent />              
              </Route>      
              <Route path="/item/:id">                
                <ItemDetailContainerComponent />
              </Route>
              <Route path="/cart">          
                <CartComponent />
              </Route>
              <Route path="/search/:keyword">                
                <SearchComponent />              
              </Route>
            </Switch>
            <FooterComponent />
          </BrowserRouter>            
        </CartProvider>
      </FirebaseProvider>

    </>
  );
}

export default App;