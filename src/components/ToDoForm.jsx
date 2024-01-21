import { useState } from 'react';
import '../App.css';


function ToDoForm () {
const [userInput, setUserInput] = useState('');

    return (

    <form className='header'>
    <input className='header-item' type='text' placeholder='to-do'></input>
    <button className='header-btn' type='submit'>Enter</button>
    </form>

    )
}

export default ToDoForm;