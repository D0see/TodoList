import React, {useState} from 'react'
import './task.css' 

export default function Task({content, handleDeletion, num, deleted}){
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(prev => !prev)
    }
    
    return (
        <li className={`Task ${deleted ? " Move-up" : ""}`}>
            <p className="Num">{num}</p>
            <p className={`Content${checked? " Crossed": ""}`}>{content}</p>
            <input className="Checkbox" type='checkbox' checked={checked} onChange={handleCheckboxChange}></input>
            <button className="DeleteButton" onClick={handleDeletion}>X</button>
        </li>
    )
    
}