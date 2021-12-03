import { Grid } from '@material-ui/core';
import "./Footer.css";

const Footer = () => {
    return (

                <Grid className="footer" container direction="row" alignItems="flex" >
                    <Grid item xs={8}>
                        <div>Icônes conçues par <a href="https://www.flaticon.com/fr/auteurs/victoruler" title="Victoruler">Victoruler</a> from <a href="https://www.flaticon.com/fr/" title="Flaticon">www.flaticon.com</a></div>
                        <div>Icônes conçues par <a href="https://www.flaticon.com/fr/auteurs/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/fr/" title="Flaticon">www.flaticon.com</a></div>
                        <div>Icons made by <a href="https://www.flaticon.com/authors/catkuro" title="catkuro">catkuro</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    </Grid>
                    <Grid item xs={4}>
                        Ce site est la propriété de Serval Software <img alt=" " src="/serval.png" className="logo" id="logo-footer" height="50" width="50"/>
                    </Grid>
                </Grid>
    );
}

export default Footer;