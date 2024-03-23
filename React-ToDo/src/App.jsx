import './App.css';
import CssBaseline from "@mui/material/CssBaseline";
import TodoList from './ToDoList';
import NavBar from './NavBar';

function App() {

  return (
    <>
      <NavBar />
      <CssBaseline />
      <TodoList />
    </>
  )
}

export default App
