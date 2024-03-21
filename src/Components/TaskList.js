import React, {useState} from 'react';
import Task from './Task';



export default function TaskList(){
    const [task, setTask] = useState("")
    const [listOfTasks, setListOfTasks] = useState([]);

    function handleChange(event){
        setTask(event.target.value);
    }

    function handleClick(){
        setListOfTasks(prev => {
            if (!prev.includes(task)){
                return [...prev, task];
            } else {
                return [...prev];
            }
        })
        setTask("");
        console.log(listOfTasks); // Testing purposes
    }

    function handleDeletion(content){
        setListOfTasks(prev => {
            return prev.filter(task => {
                return task !== content;
            })
        })
    }

    return (
        <>
            <input name="inputTask" id="inputTask" placeholder="Type your task" onChange={handleChange} value={task}/>
            <button name="addTask" id="addTask" disabled={!task} onClick={handleClick}>Add</button>

            <ul>
                {listOfTasks.map((content, index) => {
                    return <Task content={content} key={index} handleDeletion={() => handleDeletion(content)} />
                })}
            </ul>
        </>
    )
}