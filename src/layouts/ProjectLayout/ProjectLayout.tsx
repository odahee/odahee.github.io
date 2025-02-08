import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import './ProjectLayout.scss'
import { useLayoutEffect } from 'react';

const ProjectLayout = ({children} : {children: any}) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  useLayoutEffect(() => {
    document.title = 'Oda Knits - Projects';
  }, []);

  return (
    <Box px={{xs: '10%', sm:'5%', md: '10%'}} className="project-layout-container" style={{paddingTop: isMobile ? 'calc(4rem + 56px)' : 'calc(4rem + 56px + 56px)'}}>
      {children}
    </Box>
  );
}

export default ProjectLayout;