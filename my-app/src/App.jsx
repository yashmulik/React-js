import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'; 
import {Routes , Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import UseState from './Components/27-10-23/UseState';
import UseEffect from './Components/31-10-23/UseEffect';
import UseEffectTwo from './Components/31-10-23/useEffectTwo';
import UseEffectThree from './Components/31-10-23/useEffectThree';

function App() {

  console.log("hii from app file");

  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/register' element={< Register/>}  />
      <Route path='/use-State' element={<UseState />} />
      <Route path='/use-effect' element={<UseEffect />} />  
      <Route path='/use-effect-2' element={<UseEffectTwo />} />  
      <Route path='/use-effect-3' element={<UseEffectThree />} />  

     </Routes>
    </div>
  );
}

export default App;
