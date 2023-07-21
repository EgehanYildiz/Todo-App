import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const MySearchBar = ({labelName, text, setText, addTodos}) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <InputText value={text} onChange={(e) => setText(e.target.value)} style={{ flex: '1', borderRadius: '7px', marginBottom: '10px', height: '40px'}} />
      <Button label={labelName} onClick={addTodos} style={{color: 'white', backgroundColor: 'rgb(32, 38, 46)', marginLeft: '3px', borderRadius: '7px', marginBottom: '10px', border: '1px solid white'}}/>
    </div>
  )
}

export default MySearchBar;

