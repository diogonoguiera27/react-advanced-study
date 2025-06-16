
const Events =()=>{
    const handleMyEvents =() =>{
      console.log("Ativou o evento")
    }

    const renderSomething = (x)=>{
        if (x){
            return <h1>Renderizando isso!!</h1>
        }else{
            return <h1>Tambem Poso renderizar isso!</h1>
        }
    }
    return(
        <div>
            <div>
                <button onClick={handleMyEvents}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!!")}>Clique aqui tambem</button>
                {/* forma errada de fazer */}
                <button onClick={()=>{
                    if (true){
                        console.log("Isso nao deveria existir")
                    }
                }}
                >
                  Clica aqui , Por favor 
                </button>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    )
}

export default Events;