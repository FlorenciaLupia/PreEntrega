import { useState } from "react"
import "./Counter.css"

const Counter = ({ stock= 6, inital=1, onAdd  }) => {
    const [ count, setCount ] = useState(inital)
    
    const ItemCount1 = () =>{
      if(count < stock)
      setCount(count + 1)
    }

    const ItemCount2 = () =>{
      if( count > inital)
      setCount(count - 1)
    }

    const conutOnAdd = () => onAdd(count)
    return (
              <div className="divCount">
                  <button
                        className="btnMore"
                        onClick={ItemCount1}
              >
                +
              </button>

                 <label htmlFor="">{count}</label>

                  <button
                         className="btnLess"
                         onClick={ItemCount2}
               >
                -
              </button>

                 <button
                       className="btnClean"
                       onClick={conutOnAdd}
                 >
                      Agregar al carrito
                </button>
              </div>
  )}

export default Counter