//Components
// importação isso e a maneira de reutilizar o components que foram criados em arquivos separados  
// beneficios conseguimos manter oa interface organizasdas
// sintaxe :  import nome do arquivo ( deve esta com a Primeira letra Maiucsular ) from './components/FristComponents'--> (Caminho Relativo: ate o arquivo onmde esta salvo );
import FristComponents from './components/FristComponents';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponents from './components/MyComponents';
import Events from './components/Events';
import Challenge from './components/Challenge';
// Styles / css
import './App.css';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';





function App() {
  const name = "Lucas"
  const [userName] = useState('Maria')
  return (
    <div className="App">
      <h1> Fundamentos React </h1>
      <FristComponents/>
      <TemplateExpressions />
      <MyComponents/>
      <Events/>
      <Challenge/>
      <ListRender/>
      <ConditionalRender/>
      <ShowUserName name={userName}/>
      <CarDetails brand="vw" km={10000} cor="azul"/>
    </div>
  );
}

export default App;
