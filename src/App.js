import './App.css';
import Contador from './components/Contador';

function App() {
  return (
    <div className="App">
      <h1>Memorizacion en React</h1>
      <hr/>
      <ul>
        <li>Se encargar de memorizar un Componente</li>
        <li>Lo vuelve a memorizar cuando las <b>props</b> cambian</li>
        <li>Evita re-renderizados</li>
        <li>Hay que evitarlo en la medida de lo posible, pues podria ser mas costoza la tarea de memorizacion que el de re-renderizado del componente</li>
        <li>Usalo cuando:
          <ul>
            <li>Tenemos muchos elementos renderizados en una lista</li>
            <li>Llamamos datos de APIS</li>
            <li>Un Componente se vuelve muy pesado</li>
            <li>Salen alertas de rendimiento en la consola</li>
          </ul>
        </li>
      </ul>
      <hr></hr>
      <Contador/>
    </div>
  );
}

export default App;
