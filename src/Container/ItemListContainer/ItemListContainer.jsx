import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/ItemList/ItemList'
import { pFetch } from "../../Productos/Productos"
import "./ItemListContainer.css"

const ItemListContainer = ({titulo}) => {
    const [prod, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoriaId } = useParams()

    useEffect(() => {
        if (categoriaId){
            pFetch()
            .then(respuesta => setProduct(respuesta.filter(prod => prod.categoria === categoriaId)))
            .catch(err => (console.log(err)))
            .finally(() => setLoading (false))

        } else {
            pFetch()
            .then(respuesta => setProduct(respuesta))
            .catch(err => (console.log(err)))
            .finally(() => setLoading (false))
        }
    }, [categoriaId])
   
    console.log(categoriaId)

    return(
       <>
       <div>
           <h1 id="titulo">{titulo}</h1>
           <p className='parrafo'>Tenemos todo lo que buscas para esta temporada 2023! Descuento de hasta el 30% pagando en nuestros locales. </p>
       </div>
       <div className="item">
            {loading ? 
                  <h2 className='tituloCarga'>Cargando Productos!</h2> 
                  :
                  <ItemList  prod={prod}/>
            }
        </div>
        </>
    )
}

export default ItemListContainer 