import { Grid, Typography } from '@mui/material';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <>
            <Grid sx={
                {
                    background: '#000000',
                    color: '#ffffff',
                    textAlign: 'center',
                    paddingY: 5,
                }
            }>
                <div>
                    <Typography>Made with <FontAwesomeIcon icon={faHeart} color="red"/>  by <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/itsjojoduke1">Jojo Duke</a></Typography>
                </div>
            </Grid>
        </>
    )
}

export default Footer;
