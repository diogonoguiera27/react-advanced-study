

const TemplateExpressions = ()=>{
    // aqui o codigo e javascript 
     const name="Diogo";
     const data ={
        age:31,
        job:"Programmer"
     }
    return(
        // aqui dentro e jsx 
        <div>
            <h1>ola {name}, Tudo bem?</h1>
            <p>voce atua como {data.job}</p>
           
        </div>
    )
}

export default TemplateExpressions;