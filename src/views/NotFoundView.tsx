import ContactLayout from "../layouts/ContactLayout/ContactLayout"

import yarn from '../assets/404.png'
import './view.scss'
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material"


const NotFoundView = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));


    return (
        <ContactLayout>
            <Grid container>
            <Grid item xs={12} md={6} display={'flex'} flexDirection={'column'} justifyContent={'center'} textAlign={{xs:'center', md:'left'}}>
                <Typography variant='h1' sx={{fontSize: {xs:'2rem', md:'3rem'}, fontWeight: '600', color: 'var(--text-primary)'}}>404: Page not found</Typography>
                <Typography mt={{xs:2, md:4}} variant='h2' sx={{fontSize: {xs:'1rem', md:'1.4rem'}, fontWeight: '500', color: 'var(--text-primary)'}}>We've lost the thread and can't find the page!</Typography>
            </Grid>
            <Grid item mt={{xs:10, md:0 }} xs={12} md={6} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <img style={{width: isMobile ? '100%' : '90%'}} src={yarn} alt="404 not found image"/>
            </Grid>
            </Grid>
        </ContactLayout>
    );
}

export default NotFoundView;