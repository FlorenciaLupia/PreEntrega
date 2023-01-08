import { useContext, useState,  createContext } from "react";

export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    
    const addToCard = (products) => {

        const idx = cartList.findIndex(prod => prod.id === products.id)

        if(idx === -1){
            setCartList([
                ...cartList,
                products
            ])
        } else {
            cartList[idx].quantity += products.quantity 

            setCartList( [...cartList] )
        }
    }

    const cleanCart = () => setCartList([])

    const totalPrice = () => cartList.reduce((count, prod) => count += (prod.quantity * prod.price), 0)

    const totalQuantity = () => cartList.reduce((count, prod) => count += prod.quantity, 0)

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