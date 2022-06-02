import './App.css';
import Home from './home/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import Service from './Services/Services';
import Contact from './Contact/Contact';

function App() {
  return (
    <div>
    <Routes>
      <Route path='/Nikhil_resume' element={<Home/>}/>
      <Route path='/Nikhil_resume/about' element={<About/>}/>
      <Route path='/Nikhil_resume/services' element={<Service/>}/>
      <Route path='/Nikhil_resume/contact' element={<Contact/>}/>
    </Routes>

    </div>
  );
}

export default App;
