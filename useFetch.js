import { useEffect, useRef, useState } from "react"


export const useFetch = (url) => {
  const Mostrar = useRef(true)
  const [valor, funcionvalor] = useState({date: null, loading: true, error:null})

  useEffect(()=>{


    return ()=>{
      Mostrar.current = false

    }

  }, [])
  
  useEffect(() => {
    funcionvalor({date: null, loading: true, error:null});

    fetch(url)
    .then(res => res.json())
    .then(data => {

      
       if(Mostrar.current){

         funcionvalor({
          
          date: data,
          loading: false,
          error: null
  
  
         })

       }

      

    })
    .catch(()=>{
       funcionvalor({
          date: null,
          loading: false,
          error: 'no se a podido cargar la info'
       })

    })
  
    
  }, [url])
  return valor;

}
