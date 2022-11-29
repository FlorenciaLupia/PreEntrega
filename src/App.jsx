import { useState } from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  
  let tituloApp = "Chicago Bikinis"

  return (
    <div> 
      <NavBar />
      <ItemListContainer titulo={tituloApp}/>
    </div>
  )
}

export default App
