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
                return [...prev, task];
            }
        )
        setTask("");
    }

    function handleDeletion(index){
        setListOfTasks(prev => {
            return prev.filter((task, i)=> i !== index);
        })
    }

    return (
        <>
            <div className='Background'>
                {listOfTasks.map((task, i) => <p>{`${i+1}. ${task}`}</p> )}
            </div>
            <div className='TaskList'>

                <div className='AddTask'>
                    <input name="inputTask" className="InputTask" placeholder="Type in your task" onChange={handleChange} value={task}/>
                    <button className="AddTaskButton" disabled={!task} onClick={handleClick}>Add</button>
                </div>

                <ul>
                    {listOfTasks.map((content, index) => {
                        return <Task content={content} num={index + 1} key={index} handleDeletion={() => handleDeletion(index)}/>
                    })}
                </ul>
                <div className='Footer'>
                    <p>React is hard</p>
                </div>
            </div>
        </>
    )
}