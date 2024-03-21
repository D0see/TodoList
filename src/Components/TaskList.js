import React, {useState} from 'react';
import Task from './Task/Task.js';
import './taskList.css'


export default function TaskList(){
    const [task, setTask] = useState("")
    const [listOfTasks, setListOfTasks] = useState([]);

    function handleChange(event){
        setTask(event.target.value);
    }

    function handleClick(){
        setListOfTasks(prev => {
            if (prev.includes(task)){
                return [...prev];
            } else {
                return [...prev, task];
            }
        })
        setTask("");
        console.log(listOfTasks); // Testing purposes
    }

    function handleDeletion(content){
        setListOfTasks(prev => {
            return prev.filter(task => task !== content);
        })
    }

    return (
        <div className='TaskList'>

            <div className='AddTask'>
                <input name="inputTask" id="inputTask" placeholder="Type in your task" onChange={handleChange} value={task}/>
                <button id="addTaskButton" disabled={!task} onClick={handleClick}>Add</button>
            </div>

            <ul>
                {listOfTasks.map((content, index) => {
                    return <Task content={content} num={index + 1} key={index} handleDeletion={() => handleDeletion(content)} />
                })}
            </ul>
            <div className='Footer'>
                <p>React is hard</p>
            </div>
        </div>
    )
}