import logo from './logo.svg';
import './App.css';
import Home from './Components/Home.jsx'; 
import { Routes, Route} from 'react-router-dom';
import Login from'./Components/Login.jsx';

function App() {
  console.log("hii from app file")
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Login' element={<Login />}/>
     </Routes>

    </div>
  );
}

export default App;
