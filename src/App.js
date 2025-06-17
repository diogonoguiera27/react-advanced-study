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
import {  useState } from "react";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/fragment"

function App() {
  //const name = "Lucas";
  const [userName] = useState("Maria");

  const cars = [
    { id: 1, brand: "Ferrari", color: "vermelha", km: 0, newCar: true },
    { id: 2, brand: "gol", color: "branco", km: 2500, newCar: false },
    { id: 3, brand: "uno", color: "vinho", km: 1232, newCar: false },
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
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/* fragment */}
      <Fragment propFragment="test"/>
    </div>
  );
}

export default App;
