import { useState } from "react"


const ConditionalRender = () => {
    const [ x ] = useState(true);

    const [name,setName] = useState("Diogo")
  return (
    <div>
        <h1>isso Sera Exibido?</h1>
        {x && <p>se x for true , sim ?</p> }
        <h1>if Iternario</h1>
        {name === "Diogo" ? (
            <div>
                <p>
                    o nome e joão
                </p>
            </div>
        ):(
            <div>
                <p>
                    nome nao encontrado!!
                </p>
            </div>
            
        )}
        <button onClick={() =>setName("Diogo")}>click aqui </button>
    </div>
    
  )
}

export default ConditionalRender