import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Counter from './component/Counter';
import Todos from './component/Todos';
import counter from './store/counter';

setInterval(() => {counter.increment()}, 1000)

function App() {
  return (
    <div className="App">
      <Counter/>
      <Todos/>
    </div>
  );
}

export default App;