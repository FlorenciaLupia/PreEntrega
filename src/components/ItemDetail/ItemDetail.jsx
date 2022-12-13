import Carrito from "../Carrito/Carrito"
import "./ItemDetail.css"

const ItemDetail = ({prod}) => {
  const onAdd = (cantidad) => console.log(cantidad)

  console.log(prod)
  return (
    <>
    <div className="detalle1">
     <h1 className="tituloDetalle">{prod.name}</h1>
     <h2 className="subDetalle">Categoria:{prod.categoria}</h2>
     <img src={prod.foto} alt="foto producto" className="w-50" />
     <h3 className="precioDetalle">Precio: ${prod.price}</h3>
    </div>
    <div className="contador">
        <Carrito 
         stock={8}
         initial={1}
         onAdd={onAdd}
        />
    </div> 
    </>

   
)}

export default ItemDetail