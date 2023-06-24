import React from 'react';
import './App.css';


export default function Drag(props){
    const showOptions = props.showOptions;
return(
    <>
        <div className='dr'>
            <div className='cl' onClick={showOptions}><h3>Yes</h3></div>
            <div className='cl' onClick={showOptions}><h3>Probably Not</h3></div>
        </div>
    </>
)
};
