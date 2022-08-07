import Product from './components/Product';
import Navbar from './components/Navbar';
import './App.css';
import Products from './components/Products';
import products from './product-data';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Products/>
{/*      <Product/> */}
    </div>
  );
}

export default App;
