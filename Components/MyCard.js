import React, { useState } from 'react'
import { Card } from 'primereact/card';
import MyReactYatayCard from './MyReactYatayCard';
import MySearchBar from './MySearchBar';
        
const MyCard = () => {
  const [state, setState] = useState([]);
  const [text, setText] = useState("");

  return (
    <Card >
      <div className="flex items-center justify-center text-center flex-grow p-1" style={{borderColor: '#000000', borderBottom: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '5vh', padding: '0px'}}>
        <h1>TODO-APP</h1>
      </div>
      <div>
        <MySearchBar text = {text} setText={setText} state={state} setState={setState}/>
      </div>
      <div>
        {state.map((todo, index) => {<MyReactYatayCard key={index} value={todo} state={state} setState={setState}/>})}
      </div>
    </Card>
  )
}

export default MyCard
