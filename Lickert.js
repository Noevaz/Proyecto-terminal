import React from 'react';
import Likert from 'react-likert-scale';
import imagenes from './assets/imagenes';
import './lickert.css';

export default () => {
  const likertOptions = {
    responses: [
      { value: 1, text: "1" },
      { value: 2, text: "2" },
      { value: 3, text: "3", checked: true },
      { value: 4, text: "4" },
      { value: 5, text: "5" }
    ],
    onChange: val => {
      console.log(val);
    }
  };
  return (
    <>
    <div className = 'titulo'>
      <h1>Con que juego te identificas mas?</h1>
    </div>

    <div className = 'imagenes'>
      <div>
        <img src={imagenes[0]}/>
      </div>
      <Likert {...likertOptions}></Likert>
      <div>
        <img src={imagenes[1]}/>
      </div>
    </div>
    
    </>
  );
}