import { useState } from "react"
import {addDoc, collection, getFirestore } from "firebase/firestore"
import { useCartContext } from "../../Context/CartContext"
import Form from "../Form/Form"
import Swal from "sweetalert2"
import "./FormCart.css"

const FormCart = () => {
  
  const {cartList, cleanCart} =  useCartContext()

  const [dataForm, setDataForm] = useState({
    name:"",
    phone:"",
    email:"",
    email1:""
  })

    const generateOrder = (evt) => {
        evt.preventDefault()
        
        const order = {}
        order.buyer = dataForm
        order.item = cartList.map(({title, id, price}) => ({title, id, price}))
        
        const db = getFirestore()
        const queryOrder = collection (db, "orders")
        if(dataForm.email1 === dataForm.email){
          addDoc(queryOrder,order)
        .then( resp => 
          Swal.fire({
            title: "Compra realizada!",
            text: "Felicitaciones por tu compra! Podes hacer el seguimiento con el siguiente número N°: " + resp.id,
            type: "success",
            confirmButtonText: "Ok"
           })
          )
        .catch(err => console.log(err))
        .finally(() =>{
          cleanCart()
          setDataForm({
            name:"",
            phone:"",
            email:""
          })
        })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Vuelva a intentarlo!',
            text: 'Email mal ingresado',
          })
        }   
      }
    
      const handleOnChange = (e) =>{
        setDataForm({
         ...dataForm,
         [e.target.name] : e.target.value
        })
       }
    
  return (
     
    <Form
       generateOrder={generateOrder}
       handleOnChange={handleOnChange}
       dataForm={dataForm}
    />

  )
}

export default FormCart