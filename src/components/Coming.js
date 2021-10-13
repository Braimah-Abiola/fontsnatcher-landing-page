import { Typography } from '@mui/material';
import './Coming.css';
import bigfont from '../images/bigfont.png';


const Coming = () => {
    return (
        <>
            <div className="coming-grid">
                <Typography className="fna" variant="h3">Fontsnatcher is currently in development and will be out very soon! Join the waitlist now to get any updates</Typography>
                <div className="fnb">
                    <img width="230" src={bigfont} alt="bigfont"/>
                    <button className="waitlist-btn">Join the waitlist</button>
                </div>
            </div>
        </>
    )
}

export default Coming;
