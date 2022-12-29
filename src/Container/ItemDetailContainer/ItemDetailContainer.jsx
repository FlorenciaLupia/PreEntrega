import { useEffect,useState  } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import Loading from "../../components/Loading/Loading"
import { pFetch } from "../../Productos/Productos"
import {doc, getDoc, getFirestore} from "firebase/firestore"


const ItemDetailContainer = () => {
      const [prod, setProd] = useState({})
      const [loading, setLoading] = useState(true)
      const {productoId} = useParams()

      /*
      useEffect (() =>{
        const db = getFirestore()
        const queryDoc = doc(db, "productos", "MmiuXPQCXFOJlpEoU8rO")

        getDoc(queryDoc)
        .then(respuesta => setProd ({ id: respuesta.id, ...respuesta.data()}))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
      }, [])
*/
   

  
      useEffect(() =>{
        pFetch(productoId)
             .then(resp=> setProd(resp))
             .catch(err=> console.log(err))
             .finally(()=> setLoading(false))
      }, [])

  return (
     <>
       { loading ? <Loading/>

       :

       <ItemDetail prod={prod}/>

       }
     
     </>
  )
}

export default ItemDetailContainer