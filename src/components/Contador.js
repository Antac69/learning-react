import { useState } from "react"
import Jsx from './Jsx'

const Contador=()=>{
    const [contador,setContador]= useState(0)

    const aumentar=()=>{
setContador(contador+5)
    }
    const disminuir=()=>{
        contador > 0 
        ? setContador(contador-5)
        : setContador(contador)
    }
    return(
        <>
        <Jsx temperatura={contador}></Jsx>
        <button onClick={aumentar}>+</button>
        <button onClick={disminuir}>-</button>
        </>
    )
}

export default Contador