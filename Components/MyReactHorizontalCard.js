import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import '../Styles & Animations/animations.css';

const MyReactHorizontalCard = ({value, removeTodos, editTodos, doneTodos, isBeingEdited, toast}) => {
  return (
    <div className={`flex rounded ${isBeingEdited ? 'flash' : ''}`} style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'rgb(32, 38, 46)', border: '1px solid #fafafa', borderRadius: '0.25rem', marginBottom: '10px', alignSelf: 'center' }}>
      <div className="flex items-center justify-center text-center flex-grow p-1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: '1', padding: '1rem' , height: 'auto'}}>
        <span style={{color: '#ffffff', fontSize: 20}}>{value}</span>
      </div>
      <div className="flex items-center justify-end flex-shrink-0 p-2" style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flexShrink: '0', padding: '1rem', height: 'auto' }}>
        <IconButton aria-label="edit" opacity-70 onClick={editTodos} size='small' style={{color: 'white'}}>
          <EditIcon fontSize='medium'/>
        </IconButton>
        <IconButton aria-label="done" color="white" opacity-70 onClick={doneTodos} size='small' style={{color: 'blue'}}>
          <DoneIcon fontSize='medium'/>
        </IconButton>
        <IconButton aria-label="delete" color="white" opacity-70 onClick={removeTodos} size='small'>
          <DeleteIcon fontSize='medium' />
        </IconButton> 
      </div>  
    </div>
  );

}

export default MyReactHorizontalCard
