
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home';
import Login from './components/Login/Login/Login';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import SignUp from './components/Login/SignUp/SignUp';
import ToDoList from './components/ToDoList/ToDoList';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/todolist' element=
        {<RequireAuth>
          <ToDoList></ToDoList>     
             </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
