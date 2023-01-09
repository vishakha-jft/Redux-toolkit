import './App.css'
import Todoform from './components/Todoform';
import Todolist from './components/Todolist';
import Todoprovider from './providers/Todoprovider';
function App() {
  return (
    <div className="App">
      <header>
        To - Do List App
      </header>

      <Todoprovider>
        <Todoform/>
        <Todolist/>
      </Todoprovider>
    </div>
  );
}

export default App;
