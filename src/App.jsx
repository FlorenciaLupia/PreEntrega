import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from './Container/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from "./Container/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/footer/footer";
import Contacto from "./components/Contacto/Contacto";
import CartCarrito from "./components/CartCarrito/CartCarrito";
import CartWidget from './components/CartWidget/CartWidget';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  
  let tituloApp = "Chicago Bikinis"

  return (
    <BrowserRouter> 
      <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer titulo={tituloApp}/>}/>
      <Route path="/categoria/:categoriaId" element={<ItemListContainer titulo={tituloApp}/>}/>
      <Route path="/detalle/:productoId" element={<ItemDetailContainer/>}/>
      <Route path="/contacto" element={<Contacto/>}/>
      <Route path="/carritoo" element={<CartCarrito/>}/>
      
    </Routes>  
      
      <Footer/>
    </BrowserRouter>
                        
  )
}

export default App
