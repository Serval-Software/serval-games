import { Typography, Paper, Grid } from '@material-ui/core';
import ChromeDinoGame from 'react-chrome-dino';

import Layout from '../../components/Layout/Layout';

const SharkAttack = () => {
    return(
        <Layout
            page="SharAttack"
            blockBody = {
                <>
                <Typography variant="h4">Bienvenue dans Shark Attack. Second mini-jeu de la soirée! </Typography>
                <Grid container direction="column" alignItems="center" xs={12}>
                    <Paper elevation={1}>
                        <ChromeDinoGame />
                    </Paper>
                </Grid>
                </>
            }
        />
    )
}

export default SharkAttack;