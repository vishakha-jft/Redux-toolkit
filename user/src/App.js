import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Adduser from './components/Adduser'
import Home from './components/Home'
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/adduser' element={<Adduser/>}/>
        <Route path='/adduser/:id' element={<Adduser/>}/>
      </Routes>  
    </Router>
    </>
  );
}

export default App;
