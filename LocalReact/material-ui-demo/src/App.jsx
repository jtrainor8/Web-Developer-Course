import './App.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import RatingDemo from './RatingDemo';
import FormDemo from './FormDemo';
import NavBar from './NavBar';

function App() {


  return (
    <>
      {/* <Button variant="contained" onClick={() => alert("hi")}>Contained</Button>
      <Button variant="contained" size="small" color='success' onClick={() => alert("hi")}>Contained</Button>
      <Button variant="contained" size="medium" color='error' onClick={() => alert("hi")}>Contained</Button>
      <Button variant="contained" size="large" color='secondary' onClick={() => alert("hi")}>Contained</Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="text">Contained</Button>
      <Button variant="outlined">Contained</Button> */}



      {/* <RatingDemo /> */}

      <NavBar />
      <FormDemo />
      

      
    </>
  )
}

export default App
