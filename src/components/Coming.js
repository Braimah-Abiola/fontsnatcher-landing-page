import { Grid, Typography } from '@mui/material';
import './Coming.css';
import bigfont from '../images/bigfont.png';


const Coming = () => {
    return (
        <>
            <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingX: 10, paddingY: 20, }}>
                <div className="fna"><Typography variant="h4">Fontsnatcher is currently in development and will be out very soon! Join the waitlist now to get any updates</Typography></div>
                <div className="fnb">
                    <img width="230" src={bigfont} alt="bigfont"/>
                    <button className="waitlist-btn">Join the waitlist</button>
                </div>
            </Grid>
        </>
    )
}

export default Coming;
