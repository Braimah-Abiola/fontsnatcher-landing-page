import { Typography } from '@mui/material';
import './Coming.css';
import bigfont from '../images/bigfont.png';


const Coming = () => {
    return (
        <>
            <div className="coming-grid">
                <div className="fna"><Typography variant="h3">Fontsnatcher is currently in development and will be out very soon! Join the waitlist now to get any updates</Typography></div>
                <div className="fnb">
                    <img width="230" src={bigfont} alt="bigfont"/>
                    <button className="waitlist-btn">Join the waitlist</button>
                </div>
            </div>
        </>
    )
}

export default Coming;
