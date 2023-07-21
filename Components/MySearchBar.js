import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const MySearchBar = ({text, setText, addTodos}) => {

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <InputText value={text} onChange={(e) => setText(e.target.value)} style={{ flex: '1'}} />
      <Button label='Add' icon="pi pi-plus" onClick={addTodos} />
    </div>
  )
}

export default MySearchBar;

