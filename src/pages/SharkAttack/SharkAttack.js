import Layout from '../../components/Layout/Layout';
import { Grid, Typography } from '@material-ui/core';

import './SharkAttack.css';

const SharkAttack = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const shark = document.querySelector('.shark')
        const grid = document.querySelector('.grid')
        const body = document.querySelector('body')
        const alert = document.getElementById('alert')
        let isJumping = false
        let gravity = 0.9
        let isGameOver = false
        
        function control(e) {
          if (e.keyCode === 32) {
            if (!isJumping) {
              isJumping = true
              jump()
            }
          }
        }
        document.addEventListener('keyup', control)
        
        let position = 0
        function jump() {
          let count = 0
          let timerId = setInterval(function () {
            //move down
            if (count === 15) {
              clearInterval(timerId)
              let downTimerId = setInterval(function () {
                if (count === 0) {
                  clearInterval(downTimerId)
                  isJumping = false
                }
                position -= 5
                count--
                position = position * gravity
                shark.style.bottom = position + 'px'
              },20)
        
            }
            //move up
            position +=30
            count++
            position = position * gravity
            shark.style.bottom = position + 'px'
          },20)
        }
        
        function generateObstacles() {
          let randomTime = Math.random() * 4000
          let obstaclePosition = 1000
          const obstacle = document.createElement('div')
          if (!isGameOver) obstacle.classList.add('obstacle')
          grid.appendChild(obstacle)
          obstacle.style.left = obstaclePosition + 'px'
        
          let timerId = setInterval(function() {
            if (obstaclePosition > 0 && obstaclePosition < 60 && position < 60) {
              clearInterval(timerId)
              alert.innerHTML = 'Game Over'
              isGameOver = true
              //remove all children
              //body.removeChild(body.firstChild)
              while (grid.firstChild) {
                grid.removeChild(grid.lastChild)
                
              }
              
            }
            obstaclePosition -=10
            obstacle.style.left = obstaclePosition + 'px'
          },20)
          if (!isGameOver) setTimeout(generateObstacles, randomTime)
        }

            generateObstacles()
        
        
        })



    return(
        <Layout
            page="SharAttack"
            blockBody = {
                <>
                    <Typography variant="h4">Bienvenue dans Shark Attack. Second mini-jeu de la soirée! </Typography>
                    <Grid container >
                        <div id="desert">
                            <h2 id="alert"></h2>
                            <div class="grid">
                                <div class="shark"></div>
                            </div>
                        </div>
                    </Grid>
                </>
                
            }
        />
    )
}

export default SharkAttack;