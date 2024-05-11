import { motion } from "framer-motion";
import './view.scss'
import { useMediaQuery, useTheme } from "@mui/material";
import Typewriter from 'typewriter-effect';
import { useEffect } from "react";

const LoaderView = ({setLoading} : {setLoading: any}) => {


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 5000)
        return () => clearTimeout(timer);
    })

    return (
        <div className="main-layout-container" style={{paddingTop: isMobile ? 'calc(4rem + 56px)' : 'calc(4rem + 56px + 56px)'}}>
            <motion.div className='main-landing' style={{marginTop: "88px", display:'flex', flexDirection:'column' ,alignItems: isMobile ? 'start' : 'center'}}>
                <Typewriter
                    options={{
                        cursorClassName: 'typewriter_cursor_loading',
                        wrapperClassName: 'loader-writer',
                        delay: 120,
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString('<span style=" color: var(--text-primary);"> Hello, I am Oda Knits!</span>')
                        .pauseFor(2500)
                        .start();
                    }}
                />
            </motion.div>
        </div>
    );
}

export default LoaderView;