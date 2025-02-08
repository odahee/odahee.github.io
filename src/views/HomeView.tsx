import MainLayout from "../layouts/MainLayout/MainLayout";
import './view.scss'
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaAsterisk } from "react-icons/fa6";
import AboutMe from "../components/AboutMe/AboutMe";


const HomeView = () => {


  return (
    <MainLayout>
      <Box mt={12} sx={{height:'200vh'}}>
      <AboutMe/>
     </Box>
    </MainLayout>
  );
}

export default HomeView;