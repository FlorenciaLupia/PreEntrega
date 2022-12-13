
let productos = [
   {id:"1" ,name: "Mohana", categoria:"Bikinis" , stock: "100", price: "12000",foto: "https://cdn.shopify.com/s/files/1/0560/4664/9509/products/SH.COMPAMEX2.1788_900x.jpg?v=1663184535"},
   {id:"2" ,name: "Nina", categoria:"Bikinis" , stock: "100", price: "12000",foto: "https://cdn.shopify.com/s/files/1/0560/4664/9509/products/SH.COMPAMEX2.1275_1800x1800.jpg?v=1670212312"},
   {id:"3" ,name: "Roma", categoria:"Bikinis" , stock: "100", price: "12000",foto: "https://cdn.shopify.com/s/files/1/0560/4664/9509/products/SH.COMPAMEX2.3017_900x.jpg?v=1663413219"},
   {id:"4" ,name: "Africa", categoria:"Bikinis" , stock: "100", price: "12000",foto: "https://cdn.shopify.com/s/files/1/0560/4664/9509/products/SH.COMPAMEX2.793_1800x1800.jpg?v=1663271403"},
   {id:"5" ,name: "Australia", categoria:"Bikinis" , stock: "100", price: "12000",foto: "https://cdn.shopify.com/s/files/1/0560/4664/9509/products/SH.COMPAMEX2.1376_1800x1800.jpg?v=1666637107"},
   {id:"6" ,name: "Malaika", categoria:"Bikinis" , stock: "100", price: "12000",foto: "https://cdn.shopify.com/s/files/1/0560/4664/9509/products/rufinae181-04_900x.jpg?v=1651755199"},
   {id:"7" ,name: "Barcelona", categoria:"Enteriza" , stock: "100", price: "10000",foto: "https://cdn.shopify.com/s/files/1/0560/4664/9509/products/MALU-COBRE-BRILLANTE_900x.jpg?v=1663245163"},
   {id:"8" ,name: "Paris", categoria:"Enteriza" , stock: "100", price: "10000",foto: "https://cdn.shopify.com/s/files/1/0560/4664/9509/products/SH.COMPAMEX2.1282_1800x1800.jpg?v=1665598007"},
   {id:"9" ,name: "Ariel", categoria:"Enteriza" , stock: "100", price: "10000",foto: "https://cdn.shopify.com/s/files/1/0560/4664/9509/products/SH.COMPAMEX2.1611_1800x1800.jpg?v=1669311720"},
   {id:"10" ,name: "Lisboa", categoria:"Enteriza" , stock: "100", price: "10000",foto: "https://cdn.shopify.com/s/files/1/0560/4664/9509/products/KAIWA-CREMA-3_1800x1800.jpg?v=1663192870"}
]

export const pFetch = (id) => {
    return new Promise( (aceptado, rechazado)=> {
        setTimeout(() => {
            aceptado(id ? productos.find(prod => prod.id === id) : productos)  
        }, 1000)
    })
}