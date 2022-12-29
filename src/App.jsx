import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartContextProvider } from "./Context/CartContext";
import ItemListContainer from './Container/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from "./Container/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import Contacto from "./components/Contacto/Contacto";
import CartContainer from "./Container/CartContainer/CartContainer";

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  let tituloApp = "Chicago Bikinis"

  return (
    <CartContextProvider>

    <BrowserRouter> 
      <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer titulo={tituloApp}/>}/>
      <Route path="/categoria/:categoriaId" element={<ItemListContainer titulo={tituloApp}/>}/>
      <Route path="/detalle/:productoId" element={<ItemDetailContainer/>}/>
      <Route path="/contacto" element={<Contacto/>}/>
      <Route path="/carritoo" element={<CartContainer/>}/>
      
    </Routes>  
      
      <Footer/>

    </BrowserRouter>

    </CartContextProvider>                   
  )
}

export default App
