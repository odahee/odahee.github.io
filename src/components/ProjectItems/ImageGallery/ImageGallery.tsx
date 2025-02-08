import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence, wrap } from "framer-motion";
import './ImageGallery.scss';
import { Box, Fade } from "@mui/material";

export const ImageGallery = ({images}:{images: string[]}) => {
    const [currentImage, setCurrentImage] = useState<number>(0)
    
    const isIndexOutOfRange = (index: number) => {
        return index >= images.length || index < 0
    }

    const paginate = (index: number) => {
        if(isIndexOutOfRange(index)) return
        setCurrentImage(index);
    };

  return (
    <Box sx={{height:'100%', width: '100%', position:'relative', display:'flex', alignItems:'center'}}>
        <motion.img
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: .2, ease:'easeInOut'}}
        style={{height:'100%', width: '100%', overflow:'hidden', objectFit:'cover', alignItems:'center'}}
        key={currentImage}
        src={images[currentImage]}
        />
        {images.length > 1 &&
        <>
            <motion.button className="image-gallery-button" onClick={() => paginate(currentImage + 1)} style={{right: 0}}>
            &#8594;
            </motion.button>
            <motion.button className="image-gallery-button" onClick={() => paginate(currentImage - 1)} style={{left: 0}}>
            &#8592;
            </motion.button>
        </>
        }
    </Box>
  );
};
