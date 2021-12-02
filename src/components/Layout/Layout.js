import { Paper, Typography, Box} from '@material-ui/core';
import "./Layout.css";
const Layout = (props) => {
    const { blockBody } =  props
   
    return (
        <>
            <Paper elevation={0}>
                <Typography component="div" align="center" style={{ backgroundColor: '#C2D3F7',paddingTop:5}}>
                    <Box sx={{ minHeight: '100vh', py: 3, margin:0 }}>
                        { blockBody } 
                    </Box>
                </Typography>
            </Paper>
        </>
    );
};

export default Layout;