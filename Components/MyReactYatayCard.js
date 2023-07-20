import { Button } from 'primereact/button';

const MyReactHorizontalCard = ({value, state, setState}) => {

  const handleClick = (e) => {
    const newArray = state.filter(item => item !== value);
    setState(newArray);
  }

  return (
    <div className="flex rounded" style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#323b35', border: '1px solid #fafafa', borderRadius: '0.25rem', margin: '5px 0', alignSelf: 'center' }}>
      <div className="flex items-center justify-center text-center flex-grow p-1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: '1', padding: '1rem' , height: 'auto'}}>
        <span style={{color: '#ffffff', fontSize: 20}}>{value}</span>
      </div>
      <div className="flex items-center justify-end flex-shrink-0 p-2" style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flexShrink: '0', padding: '1rem', height: 'auto' }}>
        <Button icon="pi pi-times" rounded text raised severity="danger" aria-label="Cancel" onClick={handleClick} style={{backgroundColor: 'red'}}/> {/*onclick will be added here*/}
      </div>
    </div>
  )
}

export default MyReactHorizontalCard
