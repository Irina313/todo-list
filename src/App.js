import './App.css';
import image from './checklist.jpg';
import {List} from './List';

function App() {
  return (
    <div className="App">
      <div className="container">
      <img src={ image } width="250px" alt="ToDolist"/>
      </div>
      <div className="container">
      <h1> To Do List</h1>
      </div>
<List/>
    </div>
  );
}

export default App;
