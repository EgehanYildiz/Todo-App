import React, { useState, useRef } from 'react'
import { Card } from 'primereact/card';
import MyReactHorizontalCard from './MyReactHorizontalCard';
import MySearchBar from './MySearchBar';
import { Toast } from 'primereact/toast';
        

const MyCard = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [labelName, setLabelName] = useState('Add');

  const toast = useRef(null);

  const addTodos = () => {
    if(text.trim() !== ''){
      if(editIndex >= 0){
        let newArr = [...todos];
        newArr[editIndex] = text;
        setTodos(newArr);
        toast.current.show({severity: 'success', summary: 'Successful Edit', detail: 'Task edited successfully.', life: 2000});
        setEditIndex(-1);
        setText("");
        setLabelName("Add");
      } else {
        setTodos([...todos, text]);
        setText("");
        toast.current.show({severity: 'success', summary: 'Success', detail: 'Task added successfully.', life: 2000});
      }
    }
    else{
      toast.current.show({severity: 'warn', summary: 'Warning', detail: 'You can\'t add an empty task.', life: 2000});
    }
  }  

  const removeTodos = (index) => {
    if(index === editIndex){
      setEditIndex(-1);
      setText("");
      setLabelName("Add");
    }
    let newArr = [...todos];
    newArr.splice(index, 1);
    setTodos(newArr);
    toast.current.show({severity: 'success', summary: 'Deleted', detail: 'Task deleted successfully.', life: 2000});
  }

  const editTodos = (index) => {
    setEditIndex(index);
    setText(todos[index]);
    setLabelName("Edit");
  };

  const doneTodos = (index) => {
    if(index === editIndex){
      setEditIndex(-1);
      setText("");
      setLabelName("Add");
    }
    let newArr = [...todos];
    newArr.splice(index, 1);
    setTodos(newArr);
    toast.current.show({severity: 'success', summary: 'Done', detail: 'Task completed successfully.', life: 2000});
  };
  
  return (
    <div style={{height: '75vh', width: '75vw'}}>
      <Card >
        <div className="flex items-center justify-center text-center flex-grow p-1" style={{borderColor: '#000000', borderBottom: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '5vh', padding: '0px'}}>
          <h1>TODO-APP</h1>
        </div>
        <div>
          <MySearchBar labelName={labelName} text={text} setText={setText} addTodos={addTodos}/>
        </div>
        <div>
          {todos.map((todo, index) => <MyReactHorizontalCard key={index} value={todo} removeTodos={() => removeTodos(index)} editTodos={() => editTodos(index)} doneTodos={() => doneTodos(index)} isBeingEdited={editIndex === index} toast={toast} /> )}
        </div>
        <div>
          <Toast ref={toast} position="bottom-right" />
        </div>
      </Card>
    </div>
  )
}

export default MyCard
