import './App.css';
import HeaderComponent from './components/header/Header';
import ItemListContainerComponent from './components/itemListContainer/ItemListContainer';
import HomeComponent from './components/main/Home';


const App = () => {
  return (
    <>
        <div className="App">
            <HeaderComponent />
            <HomeComponent />
            <ItemListContainerComponent />
        </div>
    </>
  );
}

export default App;
