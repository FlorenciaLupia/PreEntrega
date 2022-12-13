import { useState } from "react"

const Carrito = ({ stock= 6, inital=1, onAdd  }) => {
    const [ contador, setContador ] = useState(inital)
    
    const ItemCount1 = () =>{
      if(contador < stock)
        setContador(contador + 1)
    }

    const ItemCount2 = () =>{
      if(contador > inital)
        setContador(contador - 1)
    }

    const conutOnAdd = () => onAdd(contador)
    return (
              <div>
                  <button
                        className="btn btn-outline-secondary"
                        onClick={ItemCount1}
              >
                +
              </button>

                 <label htmlFor="">{contador}</label>

                  <button
                         className="btn btn-outline-secondary"
                         onClick={ItemCount2}
               >
                -
              </button>

                 <button
                       className="btn btn-outline-secondary"
                       onClick={conutOnAdd}
                 >
                      Agregar al carrito
                </button>
              </div>
  )}

export default Carrito