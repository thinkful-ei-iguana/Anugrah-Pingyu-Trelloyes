import React from 'react';

export default function renderCards(props){
  return  (
      <div className='Card'>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
  )
}

