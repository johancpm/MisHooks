import { useState } from "react"


export const useCounter = ( valorInicial = 10) => {
  
    const [contador, setcontador] = useState(valorInicial)

    const incrementar = ( ) => {

      setcontador (contador + 1)

    }

    const decremento = ()=>{

      setcontador (contador - 1)

    }

    const resets = (  )=>{

     setcontador ( valorInicial)

    }
  return {
    contador,
    incrementar,
    decremento,
    resets

  }
}
