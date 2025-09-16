
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/nav';
import Home from './sections/Home';
import About from './sections/About';
import Footer from './components/footer';
import Proyectos from './sections/Proyects';


function App() {
 
  return (
    <Router>
      <Navbar />  
      <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/proyectos" element={<Proyectos />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  )
}

export default App
//<Route path="/" element={<Home />} /> 