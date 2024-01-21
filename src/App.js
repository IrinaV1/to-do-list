import { useState } from 'react';
import ToDo from './components/ToDo';
import ToDoForm from './components/ToDoForm';
import './App.css';

function App() {
const [todos, setTodos] = useState([])

const addTask = (userInput) => {
if(userInput) {
  const newItem = {
    id: Math.random().toString(36).substring(2,9),
    task: userInput,
    complete: false
  }
  setTodos([...todos, newItem])
}
}

const removeTask = () => {

}

const handlerToggle = () => {

}
  return (
    <div className="wrapper">
      <h1> Список задач: {todos.length}</h1>
  <ToDoForm addTask={addTask} />
  {todos.map((todo) => {
    return(
      <ToDo 
      todo={todo}
      key={todo.id}
      toggleTask={handlerToggle}
      removeTask={removeTask}
      />
    )
  })}

    </div>
  );
}

export default App;
