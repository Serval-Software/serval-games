import Layout from '../../components/Layout/Layout';
import {Grid, Typography } from '@material-ui/core';

import './SharkAttack.css';

const SharkAttack = () => {
    document.addEventListener('DOMContentLoaded', () => {
      const dino = document.getElementById("shark");
      const rock = document.getElementById("rock");
      
      function jump() {
        dino.classList.add("jump-animation");
        setTimeout(() =>
          dino.classList.remove("jump-animation"), 500);
      }
      
      document.addEventListener('keypress', (event) => {
        if (!dino.classList.contains('jump-animation')) {
          jump();
        }
      })
      
      setInterval(() => {
        const dinoTop = parseInt(window.getComputedStyle(dino)
          .getPropertyValue('top'));
        const rockLeft = parseInt(window.getComputedStyle(rock)
          .getPropertyValue('left'));
      
        if (rockLeft < 0) {
          rock.style.display = 'none';
        } else {
          rock.style.display = ''
        }
      
        if (rockLeft < 50 && rockLeft > 0 && dinoTop > 150) {    
          const replay = window.confirm("Rejouer ?");
          if(replay){
            window.location.href="/shark";
          }else{
            window.location.href="/";
          }
        }
      }, 50);   
    })

    return(
        <Layout
            page="SharAttack"
            blockBody = {
                <>
                    <Typography variant="h4">Bienvenue dans Shark Attack. Second mini-jeu de la soirée! </Typography>
                    <Grid container >
                      <div id="desert">
                        <div id="shark"></div>
                        <div id="rock"></div>
                      </div>
                    </Grid>
                </>  
            }
        />
    )
}

export default SharkAttack;