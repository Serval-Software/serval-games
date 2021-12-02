import Layout from '../../components/Layout/Layout';

import './SharkAttack.css';

const SharkAttack = () => {
    const shark = document.getElementById("shark");
    const obstacle = document.getElementById("obstacle");

    function jump() {
        if(shark.classList !== "jump"){
            shark.classList.add("jump");

            setTimeout(function(){
                shark.classList.remove("jump");
            }, 200);
        }
       
    }

    let isAlive = setInterval(function () {
        let sharkTop = parseInt(window.getComputedStyle(shark).getPropertyValue("top"));
        let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"))
        if(obstacleLeft !== null && sharkTop !== null){
            if(obstacleLeft < 25 && obstacleLeft > 0 && sharkTop >= 250){
                //alert("Game Over!")
    
            }
        }
        
      }, 100);

    document.addEventListener("keydown", function (event) {
        jump();
    });



    return(
        <Layout
            page="SharAttack"
            blockBody = {
                // <>
                // <Typography variant="h4">Bienvenue dans Shark Attack. Second mini-jeu de la soirée! </Typography>
                // <Grid container direction="column" alignItems="center" xs={12}>
                //     <Paper elevation={1}>
                //         {/* <ChromeDinoGame /> */}
                       
                //     </Paper>
                // </Grid>
                // </>

                <div class="game">
                    <div id="shark"/>
                    <div id="obstacle"/>
                </div>
            }
        />
    )
}

export default SharkAttack;