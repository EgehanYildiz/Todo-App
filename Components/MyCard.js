import React, { useState, useRef } from 'react'
import { Card } from 'primereact/card';
import MyReactHorizontalCard from './MyReactHorizontalCard';
import MySearchBar from './MySearchBar';
import { Toast } from 'primereact/toast';
        

const MyCard = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const toast = useRef(null);

  const addTodos = () => {
    if(text.trim() !== ''){
      setTodos([...todos, text]);
      setText("");
      toast.current.show({severity: 'success', summary: 'Success', detail: 'Task added successfully.', life: 2000});
    }
    else{
      toast.current.show({severity: 'warn', summary: 'Warning', detail: 'You can\'t add an empty task.', life: 2000});
    }
  }

  const removeTodos = (index) => {
    let newArr = [...todos];
    newArr.splice(index, 1);
    setTodos(newArr);
  }

  return (
    <div style={{height: '75vh', width: '75vw'}}>
      <Card >
        <div className="flex items-center justify-center text-center flex-grow p-1" style={{borderColor: '#000000', borderBottom: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '5vh', padding: '0px'}}>
          <h1>TODO-APP</h1>
        </div>
        <div>
          <MySearchBar text={text} setText={setText} addTodos={addTodos}/>
        </div>
        <div>
          {todos.map((todo, index) => {return <MyReactHorizontalCard key={index} value={todo} removeTodos={() => removeTodos(index)}/>})}
        </div>
        <div>
          <Toast ref={toast} position="bottom-right" />
        </div>
      </Card>
    </div>
  )
}

export default MyCard
