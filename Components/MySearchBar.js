import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const MySearchBar = ({ labelName, text, setText, addTodos }) => {
  return (
    <div className="flex rounded justify-content-center align-items-center">
      <InputText
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full surface-0 flex-1 border-round-lg mb-3 h-auto"
      />
      <Button
        label={labelName}
        onClick={addTodos}
        className="text-white ml-1 justify-content-center align-items-center border-round-lg mb-3 border-solid border-1 border-100 surface-0 h-auto md:text-black"
      />
    </div>
  );
};

export default MySearchBar;

