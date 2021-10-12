import "./HowItWorks.css";
import turnonnext from '../images/turnonext.svg';
import { Container, Stack, Typography } from '@mui/material';


const HowItWorks = () => {
    return (
        <div>
            <Container maxWidth="xl" sx={{ marginTop: 20, backgroundColor: "#ffffff", paddingY: 10, textAlign: "center", }}>
                <Typography className="howitworks" variant="h2">How it works</Typography>

                <div>
                    <Stack>
                        <img src={turnonnext} alt="turnon"/>
                        <div>
                            <Typography variant="h5" fontWeight="700">1. Turn on the extension</Typography>
                            <Typography variant="h5">After downloading and installing from the Chrome store, select Fontsnatcher and turn it on</Typography>
                        </div>
                    </Stack>
                </div>
            </Container>
        </div>
    )
}

export default HowItWorks;
