import { useCartContext } from "../../Context/CartContext"
import "./ItemCart.css"


const ItemCart = () => {

    const { cartList, removeProd  } = useCartContext()

  return (
    <>
    {cartList.map(prod =>
        <div className="divContainer" key={prod.id}>
          <img className="photoContainer" src={prod.foto} alt="foto compra"/>
          <h3 className="nameCart">Nombre: {prod.title} </h3>
          <h3 className="nameCart">Cantidad de productos: {prod.cantidad}</h3>
          <h3 className="nameCart">Precio por unidad: ${prod.price}</h3>
          <button className="buttonDelate" onClick={()=> removeProd (prod.id) }>Eliminar</button>
        </div> 
        )}
    </>
  )
}

export default ItemCart
