import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { Footer } from './components/Footer';
import {Menu} from './components/Menu';
import { About } from './components/About';
import { Contact } from './components/Contact';
import{Login} from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
<Routes>
     <Route path='/' element={<Home />} /> {/* Use component with lowercase 'c' */}
     <Route path="/menu" element= {<Menu/>} />
     <Route path="/about" element= {<About/>} />
         
          <Route path="/contact"element ={<Contact/>} />
          <Route path='/login' element={<Login/>}/>
          </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
