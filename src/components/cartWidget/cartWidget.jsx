import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "../../Context/CartContext";
import "./CartWidget.css"


const CartWidget = () => {
  const { totalQuantity } = useCartContext()
    return(
      <div className="containerCar">
          <div className="car" >
              <FaShoppingCart /> 
          </div>
          <div className="numberC">
              {totalQuantity () > 0 && totalQuantity()}
          </div>
      </div>
    )
}

export default CartWidget 