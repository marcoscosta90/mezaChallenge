import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderCard from './components/HeaderCard';
import TwoButtons from './components/TwoButtons';
import MainCard from './components/MainCard';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Home />
   
    </Router>
  );
}

export default App;
