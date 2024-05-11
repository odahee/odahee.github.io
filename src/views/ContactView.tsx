import { motion } from "framer-motion";
import ContactLayout from "../layouts/ContactLayout/ContactLayout"

import './view.scss'
import { Fade, FormControl, Grid, Typography } from "@mui/material"


const ContactView = () => {
  return (
    <ContactLayout>
      <Fade in timeout={1000}>
        <Grid container>
          <Grid item xs={12} md={6} display={'flex'} alignItems={'center'} justifyContent={{xs:'center', md:'start'}}>
            <Typography pb={12} variant='h1' sx={{fontSize: {xs:'3rem', md:'4rem'}, fontWeight: '500', color: 'var(--text-primary)'}}>Contact me!</Typography>
          </Grid>
          <Grid item xs={12} md={6} display={'flex'} flexDirection={'column'} alignItems={'center'}>
              <FormControl style={{width: '100%'}} className="contact-form-control">
              </FormControl>
          </Grid>
        </Grid>
      </Fade>
    </ContactLayout>
  );
}

export default ContactView;