import { useEffect,useState  } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { pFetch } from "../../Productos/Productos"


const ItemDetailContainer = () => {
      const [prod, setProd] = useState({})
      const {productoId} = useParams()
  
      useEffect(() =>{
        pFetch(productoId)
             .then(resp=> setProd(resp))
             .catch(err=> console.log(err))
      }, [])

  return (
     <ItemDetail
            prod={prod}
     />
    
  )
}

export default ItemDetailContainer