import { Button } from 'primereact/button';
        
const MyReactYatayCard = ({value}) => {

  return (
    <div className="flex rounded" style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#323b35', border: '1px solid #fafafa', borderRadius: '0.25rem' }}>
      <div className="flex items-center justify-center text-center flex-grow p-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: '1', padding: '1rem' }}>
        This is the text that should be in the middle of the div. If there is too much text, the div will grow accordingly, and the delete button will stay in its position.
      </div>
      <div className="flex items-center justify-end flex-shrink-0 p-4" style={{borderLeft: '1px solid #fafafa', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flexShrink: '0', padding: '1rem' }}>
        <Button label="Delete" icon="pi pi-trash" /> {/*onclick eklenecek buraya*/ }
      </div>
    </div>
  )
}

export default MyReactYatayCard
