//Components
// importação isso e a maneira de reutilizar o components que foram criados em arquivos separados
// beneficios conseguimos manter oa interface organizasdas
// sintaxe :  import nome do arquivo ( deve esta com a Primeira letra Maiucsular ) from './components/FristComponents'--> (Caminho Relativo: ate o arquivo onmde esta salvo );
import FristComponents from "./components/FristComponents";
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponents from "./components/MyComponents";
import Events from "./components/Events";
import Challenge from "./components/Challenge";
// Styles / css
import "./App.css";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import { useState } from "react";
import CarDetails from "./components/CarDetails";
//import Fragment from './components/Fragment';
import Container from "./components/container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";
import CssComponents from "./components/CssComponents";

function App() {
  const n = 10;
  const [Diogo] = useState("Diogo");
  //const name = "Lucas";
  const [userName] = useState("Maria");
  const redTitle = true

  const cars = [
    { id: 1, brand: "Ferrari", color: "vermelha", km: 0, newCar: true },
    { id: 2, brand: "gol", color: "branco", km: 2500, newCar: false },
    { id: 3, brand: "uno", color: "vinho", km: 1232, newCar: false },
  ];

  function showMessage() {
    console.log("Evento do Componete pai");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const person = [
    { id: 1, name: "Diogo", age: 20, profession: "Desenvolvedor" },
    { id: 2, name: "lucas", age: 26, profession: "pintor" },
    { id: 3, name: "Guilherme", age: 19, profession: "Pedreiro" },
    { id: 4, name: "Miguel", age: 16, profession: "Estudante" },
  ];

  return (
    <div className="App">
      <h1> Fundamentos React </h1>
      <FristComponents />
      <TemplateExpressions />
      <MyComponents />
      <Events />
      <Challenge />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={userName} />
      <CarDetails brand="vw" km={10000} cor="azul" newCar={false} />
      <CarDetails brand="fiat" km={0} cor="branco" newCar={true} />
      <CarDetails brand="dasd" km={10000} cor="azul" newCar={false} />

      {/* loop em  array  de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/* fragment */}
      {/* <Fragment propFragment="test"/>*/}

      {/* children*/}
      <Container myValue="testing">
        <p>este e o Conteudo </p>
      </Container>

      <ExecuteFunction myFunction={showMessage} />

      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {person.map((pessoa) => (
        <UserDetails
          key={pessoa.id}
          name={pessoa.name}
          age={pessoa.age}
          profession={pessoa.profession}
        />
      ))}
      <h1>React com Css </h1>

      <CssComponents />
      <p>este e um paragrafo e do app.js</p>
      <p className="my-comp-paragraph">este tambem e do componete </p>

      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        este elemento foi estilizado de forma inline
      </p>

      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        css dinamico
      </h2>

      <h2 style={Diogo === "Diogo" ?{ color: "Green" , backgroundColor:"#000" } : null}>
        teste nome 
      </h2>

      <h2 className={redTitle ? "red-title":"tile"}>
        este titulo vair ter a classe dinamica
      </h2>
    </div>
  );
}

export default App;
