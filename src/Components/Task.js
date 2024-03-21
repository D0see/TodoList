import React from 'react';

export default function Task({content, handleDeletion}){
    return (
        <li>
            <p>{content}</p>
            <button onClick={handleDeletion}>X</button>
        </li>
    )
    
}