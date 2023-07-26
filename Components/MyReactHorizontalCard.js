import { Button } from 'primereact/button';
import '../Styles & Animations/animations.css';

const MyReactHorizontalCard = ({value, removeTodos, editTodos, doneTodos, isBeingEdited, toast}) => {
  return (
    <div className={`flex rounded ${isBeingEdited ? 'flash' : ''} align-items-center justify-content-between surface-0 border-1 mb-2 border-solid border-200 border-round-sm`} >
      <div style={{ wordWrap: 'anywhere', whiteSpace: 'normal' }} className="flex align-items-center justify-content-center text-center flex-grow-1 p-2 h-auto" >
        <span className='text-white text-1xl'>{value}</span>
      </div>
      <div className='flex align-items-center justify-content-end flex-shrink-0 p-2 h-3rem'>
        <Button className='text-white' icon="pi pi-pencil" rounded text onClick={editTodos}/>
        <Button className='text-white' icon="pi pi-check" rounded text onClick={doneTodos}/>
        <Button className='text-white' icon="pi pi-trash" rounded text onClick={removeTodos}/>
      </div>  
    </div>
  );
}

export default MyReactHorizontalCard
