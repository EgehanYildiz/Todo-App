import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const MySearchBar = ({text, setText, state, setState}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text); // You can replace this with your own submit function
    setText(""); // clear the input
    setState(...state, text);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <InputText value={text} onChange={(e) => setText(e.target.value)} style={{ flex: '1'}} />
      <Button label='Add' icon="pi pi-plus" onClick={handleSubmit} />
    </div>
  )
}

export default MySearchBar;

