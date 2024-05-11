
import { Box, Fade, Typography, useMediaQuery, useTheme } from '@mui/material';
import './MainLayout.scss'
import Typewriter from 'typewriter-effect';
import { PiYarn } from "react-icons/pi";
import { motion } from "framer-motion";
import { useRef } from 'react';
import { fadeIn } from '../../variants/animations';



const MainLayout = ({ children } : {children: any}) => {
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const mainRef = useRef<null | HTMLDivElement>(null);

  const scrollToView = () => {
    mainRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  
  return (
    <div className="main-layout-container" style={{paddingTop: isMobile ? 'calc(4rem + 56px)' : 'calc(4rem + 56px + 56px)'}}>
        <motion.div className='main-landing' style={{display:'flex', flexDirection:'column' ,alignItems: isMobile ? 'start' : 'center'}}>
          <h1 style={{marginTop: '32px',fontSize: isMobile ? '3.2rem' : '4rem', fontWeight: '500', color: 'var(--text-primary)'}}>Hello, I am Oda Knits!</h1>
          <motion.div style={{marginTop: isMobile ? '48px' : '72px'}} variants={fadeIn(2)} initial="hidden" animate="show">
            <Typewriter
              options={{
                strings: ["I like knitting stuff!", "Follow me on instagram @oda.knits_", "Take a look at my projects for inspo!", "Click the yarn ball to see more!"],
                autoStart: true,
                loop: true,
                wrapperClassName: 'typewriter',
                cursorClassName: 'typewriter_cursor'
              }}
              onInit={(typewriter) => {
                typewriter.typeString('I Like knitting stuff!')
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
            />
          </motion.div>
          <motion.div className='main-scrolldown-container' style={{top: isMobile ? '72vh' : '82vh'}} variants={fadeIn(2)} initial="hidden" animate="show">
            <motion.button 
            style={{fontSize: isMobile ? '2.5em' : '3em'}}
            whileHover={{
              rotate: 90,
              transition: { duration: .2},
            }}
            whileTap={{ scale: 0.80, transition: {duration: .1} }}
            onClick={scrollToView}
              className='main-scrolldown'>
              <PiYarn />
            </motion.button>
          </motion.div>
        </motion.div>
      <div className='main-content' ref={mainRef}>
        {children}
      </div>
    </div>
  );
}

export default MainLayout;