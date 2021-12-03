import { Typography, Grid } from '@material-ui/core';
import React from 'react';

import Layout from '../../components/Layout/Layout';

const MinesweeperPage = () => {

    return(
        <>
            <Layout
            page="Minesweeper"
            blockBody = {
                <>
                    <Typography variant="h4">Bienvenue dans le Jeu du Démineur. Premier mini-jeu de la soirée !</Typography>
                    <iframe  width="500" height="550"  src="https://xn--dmineur-bya.eu/" title="le démineur de la loose"></iframe>
                </> 
            }
            />
        </>
    )
}

export default MinesweeperPage;