import { Link } from "react-router-dom"
import "./ButtonCart.css"

const ButtonCart = () => {
  return (

    <div className="btnGeneral">
        <Link to="/cart">
           <button
               className="btnFinish" 
               >
               Terminar Compra
           </button>
        </Link>
        <Link to="/">
            <button
               className="btnFinish"
               >
               Seguir comprando
            </button>
        </Link>
    </div>
  )
}

export default ButtonCart