import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Datasweeper = ({GameArray, stateCase}) =>{

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