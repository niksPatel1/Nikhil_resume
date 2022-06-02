import './App.css';
import Home from './home/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import Service from './Services/Services';


function App() {
  return (
    <div>
    <Routes>
      <Route path='/Nikhil_resume' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Service/>}/>
    </Routes>

    </div>
  );
}

export default App;
