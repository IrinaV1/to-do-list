import { useState } from 'react';
import ToDo from './components/ToDo';
import ToDoForm from './components/ToDoForm';
import './App.css';

function App() {
const [todos, setTodos] = useState([])

const addTask = () => {

}

const removeTask = () => {

}

const handlerToggle = () => {

}
  return (
    <div className="wrapper">
      <h1> Список задач: {todos.length}</h1>
  <ToDoForm />
  <ToDo />
    </div>
  );
}

export default App;
