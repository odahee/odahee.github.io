import { createRef, useRef, useState } from "react";
import { Box, Button, Fade, Grid, Typography } from "@mui/material";
import { ProjectItem, ProjectItemRow } from "../components/ProjectItems/ProjectTypes";

import './view.scss'
import ProjectLayout from "../layouts/ProjectLayout/ProjectLayout";
import ProjectRow from "../components/ProjectItems/ProjectRow/ProjectRow";

import genser from "../assets/genser.png"
import monkon from '../assets/monkon.png'
import { motion } from "framer-motion";



const ProjectView = () => {

    const test1 : ProjectItem= {
        title: "Anders & Monkon",
        description: "En guling og en ape som koser seg i solen. Genseren er laget av ull og monkine er laget av nydelig mykt tøystoff som varmer enhver guling på vinteren.",
        thumbnail: monkon,
        size: "M",
        yarn_type: "Rauma - Fivel",
    }

    const test2 : ProjectItem = {
        title: "Genser",
        description: "En nydelig fargerik med spennende passform. Denne genseren passer perfekt på en småkjølig høstkveld eller en frisk vårmorgen! Den er strikket i restgarn og er et perfekt prosjekt for deg som ønsker å gjøre noe med restgarnet ditt",
        thumbnail: genser,
        size: "S",
        yarn_type: "Rauma - Fivel",
    }

    const testRow1: ProjectItemRow = {
        items: [test1, test1, test1],
        title: "Sweaters"
    }

    const testRow2: ProjectItemRow = {
        items: [test1, test2, test1],
        title: "Tops"
    }

    const testRow3: ProjectItemRow = {
        items: [test2, test1, test2],
        title: "Cardigans"
    }

    const testRow4: ProjectItemRow = {
        items: [test1, test2, test1],
        title: "Accessories"
    }

    const mapableProjects = [testRow1, testRow2, testRow3, testRow4]

    const headingRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
    headingRefs.current = mapableProjects.map((_, index) =>
        headingRefs.current[index] ?? createRef<HTMLDivElement>()
    );

    const scrollToHeading = (index: number) => {
        if (headingRefs.current[index].current) {
            headingRefs.current[index].current!.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
            <ProjectLayout>
                <Fade in timeout={1000}>
                <Grid container pt={{xs: 0, md: 10}}>
                    <Grid item xs={12} md={6} sx={{display:'flex', alignItems: 'center'}}>
                        <Typography variant='h1' sx={{fontSize: {xs:'3rem', md:'4rem'}, fontWeight: '500', color: 'var(--text-primary)'}}>My Projects.</Typography>
                    </Grid>
                    <Grid mt={{xs:12, md:0}} item xs={12} md={6}>
                    <Box mt={{xs: 0, md: 4}} sx={{ display: 'flex', flexDirection: 'column', alignItems: {xs:'start', md:'end'}, gap:{xs:1.5, md:2} }}>
                        {mapableProjects.map((item, index) => {
                                // eslint-disable-next-line react-hooks/rules-of-hooks
                                const [hover, setHover] = useState(false); // State to manage hover
                                return (
                                <Box
                                    key={index}
                                    sx={{ position: 'relative', display: 'inline-block' }}
                                    onMouseEnter={() => setHover(true)}
                                    onMouseLeave={() => setHover(false)}
                                >
                                    <Button
                                    sx={{fontSize: {xs:'1.2rem', md: '1.4rem'}}}
                                    variant="contained"
                                    onClick={() => scrollToHeading(index)}
                                    className="project-menu-buttons"
                                    >
                                    Go to {item.title}
                                    </Button>
                                    <motion.div
                                    className="underline"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: hover ? 1 : 0 }} // Animate based on hover state
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    style={{ position: 'absolute', width: '100%', bottom: 0, left: 0, borderRadius:'100px', height: '2px', backgroundColor: 'var(--text-primary)', originX: 0 }}
                                    />
                                </Box>
                                );
                            })}
                        </Box>
                    </Grid>
                </Grid>
                </Fade>
                <div className='project-content'>
                    {mapableProjects.map((item, index) => (
                        <div ref={headingRefs.current[index]} key={index}>
                            <ProjectRow items={item.items} category={item.title} />
                        </div>
                    ))}
                </div>
            </ProjectLayout>
    );
}

export default ProjectView;