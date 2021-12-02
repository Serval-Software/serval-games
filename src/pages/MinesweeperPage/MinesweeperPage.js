import { Typography } from '@material-ui/core';
import React from 'react';

import MinesweeperTab from './MinesweeperTab';
import Layout from '../../components/Layout/Layout';


const MinesweeperPage = () => {


    return(
        <>
            <Layout
            page="Home"
            blockBody = {
                <>
                    <Typography variant="h4">Bienvenue dans le minesweeper. Premier mini-jeu de la soirée!</Typography>
                    <MinesweeperTab array state/>
                </> 
            }
            />

        </>
    )

}

export default MinesweeperPage;