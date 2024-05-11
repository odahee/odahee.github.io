import { Link, NavLink, redirect, useNavigate } from 'react-router-dom';
import './Navbar.scss';
import logo from "../../assets/logo.png"
import logonotext from "../../assets/logo_notext.png"
import { Fragment, useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants/animations';



const Navbar = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const imageSrc = isMobile ? logonotext : logo;

    const navigate = useNavigate();

    return (
        <motion.header className="navbar-container" variants={fadeIn(2)} initial="hidden" animate="show">
            <motion.div whileHover={{opacity: 0.8, transition: { duration: .2}}} className='navbar-logo' onClick={() => navigate("/")}>
                <Box
                    component="img"
                    sx={{
                        width: { xs:'50%', md:'60%' },
                    }}
                    alt="Logo"
                    src={imageSrc}
                />
            </motion.div>
            <Box className='navbar-links' sx={{gap:{xs:'15px', md: '60px'}, fontSize:{xs:'.9em', md: '1em'}}}>
                <NavLink to="/" className={({isActive}) => isActive ? "navbar-link-active" : "navbar-link"}>Home</NavLink>
                <NavLink to="/projects" className={({isActive}) => isActive ? "navbar-link-active" : "navbar-link"}>Projects</NavLink>
                <NavLink to="/contact" className={({isActive}) => isActive ? "navbar-link-active" : "navbar-link"}>Contact</NavLink>
            </Box>
            <motion.div whileHover={{scale: 1.2, transition: { duration: .2}}} className='navbar-socials' onClick={() => window.open("https://instagram.com/oda.knits_/", "_blank")}>
                <FaInstagram style={{fontSize:'1.2rem'}}></FaInstagram>
            </motion.div>
        </motion.header>
    )
}

export default Navbar;