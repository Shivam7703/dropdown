import React, { useState } from 'react';
import './App.css';
import Drag from './drag';

function App() {
  
  const [isClicked, setIsClicked] = useState(false);

  const showOptions = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <div className='bodi'>
        <h1>Should you use a Dropdown ?</h1>
        <div className='back'>
          <div className='sel'>
            <h3>SELECT</h3>
            <img
              src={
                isClicked
                  ? 'https://t4.ftcdn.net/jpg/03/76/16/69/240_F_376166925_qbXjkAm52AmjcZJPTcy5nwpdg3C2Z1yF.jpg'
                  : 'https://t4.ftcdn.net/jpg/03/76/16/77/240_F_376167792_hqKMedKWGYq7PLQIXEM8gTFLqWTCJACq.jpg'
              }
              onMouseOver={showOptions}
            />
          </div>
          {isClicked && <Drag showOptions={showOptions}/>}
        </div>
      </div>
    </div>
  );
}
export default App;
