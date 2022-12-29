import { Link } from "react-router-dom"
import "./ButtonCart.css"

const ButtonCart = () => {
  return (

    <div className="btnGeneral">
        <Link to="/carritoo">
           <button
               className="btnTerminar" 
               onClick={() => console.log("ir a cart")}
               >
            Terminar Compra
           </button>
        </Link>
        <Link to="/">
            <button
                className="btnTerminar"
                onClick={() => console.log("ir al home")}
                >
                Seguir comprando
            </button>
        </Link>
    </div>
  )
}

export default ButtonCart