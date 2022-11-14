import { useState } from "react"


export const useForm = (datosIngresados={}) => {
  
    const [first, setfirst] = useState(datosIngresados)

    const reset = ()=>{
      setfirst(datosIngresados)
    }

    const handleInputChange = ({target}) =>{
        setfirst({
          ...first,
          [target.name]: target.value
        })

}
return [first, handleInputChange, reset];

}
