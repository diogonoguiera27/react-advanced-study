import { useState } from "react"


const ConditionalRender = () => {
    const [ x ] = useState(true);
  return (
    <div>
        <h1>isso Sera Exibido?</h1>
        {x && <p>se x for true , sim ?</p> }
    </div>
    
  )
}

export default ConditionalRender