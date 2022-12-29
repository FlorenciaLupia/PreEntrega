import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"

const CartContainer = () => {

  const { cartList, vaciarCarrito, precioTotal, eliminarProd, cantidadTotal } = useCartContext()

    return (
      <>

      { cantidadTotal() === 0 &&
        <><p>No hay nada en el carrito</p><Link to="/">
            <button>Home</button>
          </Link></>
        }
 
       <div>
       {cartList.map(prod =>
       <div key={prod.id}>
         <img src={prod.foto} alt="foto compra"/>
         <h1>Nombre:{prod.title} </h1>
         <h2>Cantidad:{prod.cantidad}</h2>
         <h2>Precio:{prod.price}</h2>
         <button onClick={()=> eliminarProd(prod.id) }>Eliminar</button>
       </div> 
       )}
       {precioTotal() > 0 && <><h2>Total: {precioTotal()} </h2>
       <button className="btn btn-outline-danger"
            onClick={vaciarCarrito}>
            Vaciar Carrito
          </button></>}
     </div>
      </>
    )
  }
  
  export default CartContainer