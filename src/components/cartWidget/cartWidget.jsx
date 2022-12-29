import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "../../Context/CartContext";


const CartWidget = () => {
  const { cantidadTotal } = useCartContext()
    return(
      <>
        {cantidadTotal() > 0 && cantidadTotal()}
        <FaShoppingCart id="carrito" /> 
      </>
    )
}

export default CartWidget 