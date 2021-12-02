import React, {useEffect, useState}from 'react';
import { Grid, Typography } from '@material-ui/core';

import Minesweeper from '../../minesweeper/Minesweeper';

const Datasweeper = ({difficulty}) =>{


    const [GameArray, setGameArray] = useState([]);
    const [stateCase, setState] = useState([]);

    useEffect(() => {

        var minegame = new Minesweeper(difficulty);

        setState(minegame.hidden)
        setGameArray(minegame.board)

    

    }, [GameArray, stateCase]);
    function MakeCase(oneCase){
        if(stateCase){
            return(
                <Typography variant="subtitle1">{ oneCase }</Typography>
            )
        }
        else{
            return(
            <Typography variant="subtitle1"></Typography>
        )
            }
    }
    
    function make_column(column){
        Object.entries(column).map(([key, oneCase]) => {
            return(
                <Grid container direction="column" justifyContent="center" alignItems="center">
                    <Grid item key={key}>
                        {MakeCase(oneCase)}
                    </Grid>
                </Grid>
            )

        })
            
    }

    function make_row(){
        if(GameArray !== undefined && GameArray.length){
            Object.entries(GameArray).map(([key, column]) => {
                return(
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item key={key}>
                        {
                            make_column(column)
                        }
                        </Grid>
                    </Grid>
                )
            })
        }
        return(
            <Typography>Pas de démineur</Typography>
        )
        
           
        }

    return(
        <>
            {
                make_row()
            }
        </>
    )
}

export default Datasweeper;