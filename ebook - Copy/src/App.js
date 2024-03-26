//import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import NotState from './context/NoteState';
import Alert from './component/Alert';


function App() {
  return (
  
   <NotState>
     <Router>
      <Navbar/>
      <Alert message='allrounder developer'/>
    <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route exact path='/about' element={<About/>}/>
    </Routes>
     </Router>
   </NotState>
  
  );
}

export default App;
