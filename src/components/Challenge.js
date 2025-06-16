const Challenge =()=>{
    const number1 = 1
    const number2 = 1

   

    return(
        <div>
             <p>Primeiro Valor Imprimido: {number1}</p>
             <p>Segundo valor Imprimido: {number2}</p>
             <button onClick={()=> console.log(number1 + number2)}>Somar</button>
        </div>
    )
}
export default Challenge;