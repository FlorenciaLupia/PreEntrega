import { useState} from "react"
import { useCartContext } from "../../Context/CartContext"
import ButtonCart from "../ButtonCart/ButtonCart"
import WaistSelector from "../Waist/Waist"
import Counter from "../Counter/Counter"


import "./ItemDetail.css"

const ItemDetail = ({prod}) => {

  const [inputType, setInputType] = useState("button");
  const {addToCard} = useCartContext();

  const onAdd = (cantidad) => {
    setInputType("input")
    addToCard({ ...prod, cantidad })
  } 
  
  return (
    <>
    <div className="detail1">
     <h1 className="titleDet">{prod.title}</h1>
     <h2 className="subDetail">Categoria:{prod.categoria}</h2>
     <img src={prod.foto} alt="photo prod" className="w-50" />
     <h3 className="priceDetail">Precio: ${prod.price}</h3>
     <h4 className="tittleTalle">Elegi tu talle:<WaistSelector/></h4>
    </div>
 
    <div className="count1">
      {
        inputType === "button" ?
        <Counter 
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