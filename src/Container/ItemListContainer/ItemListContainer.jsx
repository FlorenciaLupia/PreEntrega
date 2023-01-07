import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/ItemList/ItemList'
import Loading from '../../components/Loading/Loading'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import "./ItemListContainer.css"

const ItemListContainer = ({title}) => {
    const [prod, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    
    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection ( db, "products")
        const queryFilter = categoryId ? query(queryCollection, 
         where("categoria","==", categoryId)) : queryCollection

         getDocs(queryFilter)
        .then(reply => setProduct( reply.docs.map(prod => ({id: prod.id, ...prod.data()}) )))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))

    }, [categoryId])
 
    return(
       <>
       <div>
           <h1 id="title1">{title}</h1>
           <p className='paragraph'>Tenemos todo lo que buscas para esta temporada 2023! Descuento de hasta el 30% pagando en nuestros locales. </p>
       </div>
       <div className="item">
            {loading ? 
                  <Loading/>
                  :
                  <ItemList  prod={prod}/>
            }
        </div>
        </>
    )
}

export default ItemListContainer 