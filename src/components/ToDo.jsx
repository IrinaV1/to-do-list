import '../App.css';

function ToDo ({todo, toggleTask, removeTask}) {
return (
   
         <div key={todo.id} className='list-items'>

      <div onClick={() => toggleTask(todo.id)} className={todo.complete ? 'list-item string' : 'list-item'}>{todo.task}</div>
      <button onClick={() => removeTask(todo.id) } type='submit'>Delate</button>
     
 
    </div>

)
}

export default ToDo;