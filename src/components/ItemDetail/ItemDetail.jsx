import { useState} from "react"
import { useCartContext } from "../../Context/CartContext"
import ButtonCart from "../ButtonCart/ButtonCart"
import Carrito from "../Carrito/Carrito"
import TalleSelector from "../Talle/Talle"
import "./ItemDetail.css"

const ItemDetail = ({prod}) => {

  const [inputType, setInputType] = useState("button");
  const {addToCard, cartList} = useCartContext();

  const onAdd = (cantidad) => {
    console.log(cantidad)
    setInputType("input")
    addToCard({ ...prod, cantidad })
  } 
  
  console.log(cartList)
  return (
    <>
    <div className="detalle1">
     <h1 className="tituloDetalle">{prod.title}</h1>
     <h2 className="subDetalle">Categoria:{prod.categoria}</h2>
     <img src={prod.foto} alt="foto producto" className="w-50" />
     <h3 className="precioDetalle">Precio: ${prod.price}</h3>
     <h4 className="tituloTalle">Elegi tu talle:<TalleSelector/></h4>
    </div>
 
    <div className="contador">
      {
        inputType === "button" ?
        <Carrito 
        stock={8}
        initial={1}
        onAdd={onAdd}
       />
      : <ButtonCart/>
      }
       
    </div> 
    </>

)}

export default ItemDetail