import { Typography } from '@mui/material';
import fonts from '../images/fonts.png';
import podcast from '../images/Podcast.svg'
import './Main.css';


const Main = () => {
    return (
        <div className="the-div">
            <div className="clutch">
                <Typography className="header1" variant="h1">Discover the<img className="img-fonts" src={fonts} alt="fonts" width="320"/> being<br/> used on the web</Typography>
                <Typography className="header2" variant="h4">Fontsnatcher is a Chrome extension for designers and developers 
                that<br/> answers the question, "What font is this website using?"</Typography>
            </div>
            <button className="hiw-btn">
                See How it works
            </button>

            <div className="illustration">
                <img className="img-podcast" src={podcast} alt="podcast-svg" width="700"/>
            </div>
        </div>
    )
}

export default Main;
