import { memo } from "react"
import { Link } from "react-router-dom"
import "./Item.css"

const Item = memo (
  ({ prod }) => {

    return (
      <div id="tarj" key={prod.id}>
  
      <div className='card'>
          <div className='cardHeader'>
            {`${prod.title} - $${prod.price}`}
          </div>
          <div className='cardBody'>
            <img src={prod.foto} alt="foto producto" className='w-50' />
          </div>
          <div>
            <Link to={`/detalle/${prod.id}`}>
              <button className='botonDetalle'>
                Detalle
              </button>
            </Link>
          </div>
      </div>
  
      </div>
    )
  }

) 

export default Item