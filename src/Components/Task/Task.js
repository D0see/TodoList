import React from 'react';
import './task.css' 

export default function Task({content, handleDeletion, num}){
    return (
        <li className='Task'>
            <p className='Num'>{num}</p>
            <p className='Content'>{content}</p>
            <button className="DeleteButton" onClick={handleDeletion}>X</button>
        </li>
    )
    
}