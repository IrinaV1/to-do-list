import { useState } from 'react';
import '../App.css';


function ToDoForm ({addTask}) {
const [userInput, setUserInput] = useState('');

const handleSubmit = (e) => {
e.preventDefault()
addTask(userInput)
setUserInput('')
}
const handleChange = (e) => {
setUserInput(e.currentTarget.value)
}
const handleKeyPress = (e) => {
if(e.key === "Enter") {
    handleSubmit(e)
}
} 
    return (

    <form onSubmit={handleSubmit} className='header'>
    <input value={userInput} onChange={handleChange} onKeyDown={handleKeyPress} className='header-item' type='text' placeholder='to-do'></input>
    <button className='header-btn' type='submit'>Enter</button>
    </form>

    )
}

export default ToDoForm;