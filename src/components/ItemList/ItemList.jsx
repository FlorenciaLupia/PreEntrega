import { memo } from "react"
import Item from "../Item/Item"


const ItemList = memo (
  ({prod}) => {
    return (
      prod.map(prod => 
      <Item prod={prod}
       key={prod.id}
      />
     ))
  }
  
) 
export default ItemList