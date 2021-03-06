import { AppBar, Toolbar } from '@mui/material';
import logo from '../images/fontsnatcher-logo.png';
import './NavBar.css';

const Navbar = () => {
    return (
        <>
            <AppBar position="relative" sx={{ backgroundColor: "#ffffff", }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", }}>
                {/* Fontsnatcher Logo and Wordmark */}
                <img 
                    className="logo" 
                    src={logo} 
                    alt="fontsnatcher-logo"
                    width="180"
                    />

                {/* Join Waitlist Button */}
                <button 
                    className="firstWaitlist-btn"
                    onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://92xkwgtfi67.typeform.com/to/EOgZww2N';
                        }}>
                    Join the waitlist
                </button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
