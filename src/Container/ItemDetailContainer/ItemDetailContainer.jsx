import { useEffect,useState  } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import Loading from "../../components/Loading/Loading"
import {doc, getDoc, getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {
      const [prod, setProd] = useState({})
      const [loading, setLoading] = useState(true)
      const {productId} = useParams()

      useEffect (() =>{
        const db = getFirestore()
        const queryDoc = doc(db, "products", productId)

        getDoc(queryDoc)
        .then(reply => setProd ({ id: reply.id, ...reply.data()}))
        .catch(err => console.log(err))
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