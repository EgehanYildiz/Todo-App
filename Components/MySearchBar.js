import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const MySearchBar = ({labelName, text, setText, addTodos}) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <InputText value={text} onChange={(e) => setText(e.target.value)} style={{ flex: '1', borderRadius: '7px', marginBottom: '10px', height: '40px'}} />
      <Button label={labelName} onClick={addTodos} 
      className='text-white ml-1 border-round-lg mb-3 border-solid border-1 border-white bg-bluegray-900'/>
    </div>
  )
}

export default MySearchBar;

