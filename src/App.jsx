import './App.css';
import HeaderComponent from './components/header/Header';
import ItemListContainerComponent from './components/itemListContainer/ItemListContainer';
import HomeComponent from './components/main/Home';
import ItemDetailContainerComponent from './components/itemDetailContainer/ItemDetailContainer';
import FooterComponent from './components/footer/Footer';
import NavbarComponent from './components/navbar/Navbar'


const App = () => {

  return (
    <>
        <div className="App">
            <HeaderComponent />
            <NavbarComponent />
            <HomeComponent />
            <ItemListContainerComponent />
            <ItemDetailContainerComponent />
            <FooterComponent />
        </div>
    </>
  );
}

export default App;