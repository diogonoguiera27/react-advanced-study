// vamos  definir como e feito  UM Compoenete em react 
/* Primeiro Passo cria um componete :  
         1 --> e Criado uma pasta chamada Componentes 
         2 --> Criando o aruivo do Componentes  FristCompoentes 
             esses aqruivo geralmente Precisa ser nomeados com CamelCase 
                exemplo: FristComponents.js ou jsx
        3 Dentro do arquivos e Preciso ter uma Função que contem os codigo dos compomentes 
        4 Precismao fazer um export default para poder Reutiliza esse Componentes em Outros Arquivo

        Estrutura Basica Do Components :
                     criado usando uma  função  nessa função sempre retorna um jsx (estrutura Html que o react entende )

*/

// criação da Função dentro do arquivo do Components
const FristCompoents =() =>{
    // precisa sempre retorna o jsx ( estrutura de html que ele entender )
    return(
        /* aqui dentro e preciso sempre ter uma elemento pai pode ser div etc  */
        <div>
            <h1>ola diogo</h1>
        </div>
    )
}
// aqui  e a exportação Para pode reutiliza esse componets e outro arquivos 
export default FristCompoents;
     