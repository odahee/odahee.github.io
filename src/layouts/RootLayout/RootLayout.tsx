import { Box } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { ToTopButton } from "../../components/ScrollToTop/ScrollToTop";
import { useRef } from "react";
import { motion } from "framer-motion";
import './RootLayout.scss'



const RootLayout = ({children} : {children: any}) => {
  
  return (
    <>
      <Navbar />
          <Box className="rootlayout-container" pb={{xs: 'calc(30vh + 6rem)', md: 'calc(28vh)'}}>
            {children}
          </Box>
      <ToTopButton/>
      <Footer />
    </>
  );
}

export default RootLayout;