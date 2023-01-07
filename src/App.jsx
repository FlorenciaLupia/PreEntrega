import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartContextProvider } from "./Context/CartContext";
import ItemListContainer from './Container/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from "./Container/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import CartContainer from "./Container/CartContainer/CartContainer";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  let titleApp = "Chicago Bikinis"

  return (
    <CartContextProvider>

    <BrowserRouter> 
      <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer title={titleApp}/>}/>
      <Route path="/categoria/:categoryId" element={<ItemListContainer titulo={titleApp}/>}/>
      <Route path="/detalle/:productId" element={<ItemDetailContainer/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/cart" element={<CartContainer/>}/>
      
    </Routes>  
      
      <Footer/>

    </BrowserRouter>

    </CartContextProvider>                   
  )
}

export default App
