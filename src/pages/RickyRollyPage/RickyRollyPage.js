import { Typography } from "@material-ui/core";
import React from "react";

import Layout from "../../components/Layout/Layout";


const RickyRollyPage = () => {
  return (
    <>
    <Layout
        page="RickyRolly"
        blockBody = {
            <React.Fragment>
                <Typography variant="h2"> Arghhh Barbe Rousse ta eu! </Typography>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&autoplay=1" 
                    title="Ce bon vieux Pirate!" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                />  
            </React.Fragment>
        }
        />
    </>
  );
}

export default RickyRollyPage;
