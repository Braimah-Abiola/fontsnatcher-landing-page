import "./HowItWorks.css";
import turnonnext from '../images/turnonnext.svg';
import findfont from '../images/findfont.svg';
import selectelmnt from '../images/selectelmnt.svg';
import { Container, Stack, Typography } from '@mui/material';


const HowItWorks = () => {
    return (
        <>
            <Container maxWidth="xl" sx={{ marginTop: 20, backgroundColor: "#ffffff", paddingY: 10, textAlign: "center", }}>
                <Typography className="howitworks" variant="h2">How it works</Typography>

                <div className="divver">
                    <Stack sx={{ paddingX: 5,}}>
                        <img src={turnonnext} width="300" alt="turnon"/>
                        <div className="tiles">
                            <Typography textAlign="left" variant="h5" fontWeight="700" sx={{ marginTop: 3, }}>1. Turn on the extension</Typography>
                            <Typography textAlign="left" variant="h6">After downloading and installing from the Chrome store, select Fontsnatcher and turn it on</Typography>
                        </div>
                    </Stack>
                    <Stack sx={{ paddingX: 5,}}>
                        <img src={selectelmnt} width="300" alt="turnon"/>
                        <div className="tiles">
                            <Typography textAlign="left" variant="h5" fontWeight="700" sx={{ marginTop: 3, }}>2. Select any text element</Typography>
                            <Typography textAlign="left" variant="h6">Hover over and click any text element you see on a website</Typography>
                        </div>
                    </Stack>
                    <Stack sx={{ paddingX: 5,}}>
                        <img src={findfont} width="300" alt="turnon"/>
                        <div className="tiles">
                            <Typography textAlign="left" variant="h5" fontWeight="700" sx={{ marginTop: 3, }}>3. Find out what font it is</Typography>
                            <Typography textAlign="left" variant="h6">Instantly get all the information and data about the particular font or typeface</Typography>
                        </div>
                    </Stack>
                </div>
            </Container>
        </>
    )
}

export default HowItWorks;
