
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import './ContactLayout.scss'
import { useLayoutEffect } from 'react';

const ContactLayout = ({children} : {children:any}) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useLayoutEffect(() => {
    document.title = 'Oda Knits - Contact';
  }, []);

  return (
   <div className="contact-layout-container" style={{paddingTop: isMobile ? 'calc(4rem + 56px)' : 'calc(4rem + 2*56px)'}}>
      {children}
    </div>
  );
}

export default ContactLayout;