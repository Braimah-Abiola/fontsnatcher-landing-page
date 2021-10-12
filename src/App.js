import './App.css';
//import { Typography, AppBar, Toolbar } from '@mui/material';
//import useStyles from './styled';
import Navbar from './components/Navbar';
import Main from './components/Main';
import HowItWorks from './components/HowItWorks';
import Coming from './components/Coming';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container-div">
      <Navbar/>
      <Main/>
      <HowItWorks/>
      <Coming/>
      <Footer/>
    </div>
  );
}

export default App;
