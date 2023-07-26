import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const MySearchBar = ({labelName, text, setText, addTodos}) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <InputText  value={text} onChange={(e) => setText(e.target.value)} 
      className='surface-0 flex-1 border-round-lg mb-3 h-3rem'/>
      <Button label={labelName} onClick={addTodos} 
      className='text-white ml-1 border-round-lg mb-3 border-solid border-1 border-100 surface-0 h-3rem'/>
    </div>
  )
}

export default MySearchBar;

