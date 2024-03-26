// import logo from './logo.svg';
import './style.css';
import Nav from './components/Nav';
import Pskform from './components/Pskform';
import About from './components/About';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav/>
      <div>
    <Routes>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/" element={<Pskform title="PSK Application"/>}></Route>
    </Routes>
      </div>
{/* <Nav page1="PSK Technologies" page2="ok"/>
<Pskform/>
<About/> */}
</Router>
    
  );
}
export default App;
