

import { Box, Grid, Typography } from '@mui/material';
import './AboutMe.scss'
import { FaAsterisk } from 'react-icons/fa6';
import { motion } from 'framer-motion';


const AboutMe = () => {


  return (
    <Box sx={{height:'90vh', width:'100%'}}>
        {/* <FaAsterisk style={{fontSize: '48px'}}/> */}
        <motion.div initial={{x: '-100%'}} animate={{x: '0'}} style={{display:'flex', alignItems:'center', width:'100%', gap: '24px'}}>
            <Typography
            variant='h2'
            sx={{
                textAlign: {xs: 'center', md:'left'},
                fontSize: { xs: '2.5em', md: '3.5em' },
                fontStyle: 'italic',
                fontWeight: '400',
                color: 'var(--text-primary)',
                whiteSpace: 'nowrap'
            }}
            >
            About me
            </Typography>
            <Box sx={{width: '100%', height:'4px', backgroundColor:'var(--text-primary)', borderRadius:'100px'}} />
        </motion.div>

    </Box>
  );
}

export default AboutMe;