import "./Form.css"


const Form = ({generateOrder, dataForm, handleOnChange}) => {

  return (
    
    <form onSubmit={generateOrder}>
    <div className="form w-50">
      <label className="labelForm" htmlFor="name">Nombre y Apellido:</label>
      <input 
             type="text" 
             className="form-control" 
             name="name" 
             value={dataForm.name}
             placeholder="Ingrese el Nombre y Apellido"
             onChange={handleOnChange}
      />

      <label className="labelForm" htmlFor="name">Telefono:</label>
              <input 
              type="number" 
              className="form-control" 
              name="phone" 
              value={dataForm.phone}
              placeholder="Ingrese el telefono"
              onChange={handleOnChange}
      />
      
      <label className="labelForm" htmlFor="name">Email:</label>
      <input 
              type="text" 
              className="form-control" 
              name="email" 
              value={dataForm.email}
              placeholder="Ingrese Email"
              onChange={handleOnChange}
      />

      <label className="labelForm" htmlFor="name">Confirmar Email:</label>
      <input 
             type="text" 
             className="form-control" 
             name="email1" 
             value={dataForm.email1}
             placeholder="Confirmar Email"
             onChange={handleOnChange}
      />
 
            <button className="btnBuy">
                              Generar Compra
           </button>

     </div>
   </form>

  )
}

export default Form