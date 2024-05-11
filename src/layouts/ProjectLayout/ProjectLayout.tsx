import { Typography, useMediaQuery, useTheme } from '@mui/material';
import './ProjectLayout.scss'
import { useLayoutEffect } from 'react';

const ProjectLayout = ({children} : {children: any}) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  useLayoutEffect(() => {
    document.title = 'Oda Knits - Projects';
  }, []);

  return (
    <div className="project-layout-container" style={{paddingTop: isMobile ? 'calc(4rem + 56px)' : 'calc(4rem + 56px + 56p)'}}>
      {children}
    </div>
  );
}

export default ProjectLayout;