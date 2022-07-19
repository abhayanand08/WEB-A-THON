import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Header from './components/constants/Heading/Header';
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <Router>
     <Header />
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
     </Routes>
     </Router>
    </div>
  );
}

export default App;
