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





function App() {
  return (
    <div className="App">
      <h1> Fundamentos React </h1>
      <FristComponents/>
      <TemplateExpressions />
      <MyComponents/>
      <Events/>
      <Challenge/>
      <ListRender/>
    </div>
  );
}

export default App;
