import Item from "../Item/Item"


const ItemList = ({prod}) => {
  return (
    prod.map(prod => 
    <Item prod={prod}
     key={prod.id}
    />
   ))
}

export default ItemList