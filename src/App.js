import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderCard from './components/HeaderCard';
import TwoButtons from './components/TwoButtons';
import MainCard from './components/MainCard';


function App() {
  return (
    <Router>
      <Navbar />
      <HeaderCard />
      <TwoButtons />
      <MainCard />
    </Router>
  );
}

export default App;
