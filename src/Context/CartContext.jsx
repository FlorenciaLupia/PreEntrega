import { useContext, useState,  createContext } from "react";

export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    
    const addToCard = (producto) => {

        const idx = cartList.findIndex(prod => prod.id === producto.id)

        if(idx === -1){
            setCartList([
                ...cartList,
                producto
            ])
        } else {
            cartList[idx].cantidad += producto.cantidad 

            setCartList( [...cartList] )
        }

      
    }

    const cleanCart = () => setCartList([])

    const totalPrice = () => cartList.reduce((count, prod) => count += (prod.cantidad * prod.price), 0)

    const totalQuantity = () => cartList.reduce((count, prod) => count += prod.cantidad, 0)

    const removeProd = (id) => setCartList(cartList.filter(prod => prod.id !== id))

    return(
        <CartContext.Provider value={{
            cartList,
            addToCard,
            cleanCart,
            totalQuantity,
            totalPrice,
            removeProd 
        
        }}>

          { children }

        </CartContext.Provider>
    )
}