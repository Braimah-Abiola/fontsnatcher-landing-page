import './App.css';
import './components/NavBar.css';
import './components/Main.css';
import './components/HowItWorks.css';
//import { Typography, AppBar, Toolbar } from '@mui/material';
//import useStyles from './styled';
import Navbar from './components/Navbar';
import Main from './components/Main';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div className="container-div">
      <Navbar/>
      <Main/>
      <HowItWorks/>
    </div>
  );
}

export default App;
