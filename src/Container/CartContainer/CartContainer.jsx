import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"
import ItemCart from "../../components/ItemCart/ItemCart"
import FormCart from "../../components/FormCart/FormCart"
import "./CartContainer.css"


const CartContainer = () => {

  const { cleanCart, totalPrice, totalQuantity  } = useCartContext()

    return (
      <>
       <ItemCart/>
       {totalQuantity() === 0 &&
        <>
        <h1 className="titleCart">¡No hay productos!</h1>
        <Link to="/">
            <button className="buttonHome">Ir al inicio</button>
        </Link>
        </>
        }
     
    <div className="containerForm">
       {totalPrice() > 0 && 
       <>
       <h2 className="titleTotal">Total a pagar: ${totalPrice()}</h2>  
       
       <FormCart/>


       <button className="btnC"
            onClick={cleanCart}>

            Vaciar Carrito

       </button>
         
      </> }
     </div>
      </>
    )
  }
  
  export default CartContainer