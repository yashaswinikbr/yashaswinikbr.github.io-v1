import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from "react-scroll";
import React from "react";
import About from "../components/About.jsx";


const Hero = () => {

const CustomTitle = styled(Typography)(({theme}) => ({
  color: "white",
  textAlign: "center",
  [theme.breakpoints.down("md")]:{
    fontSize: "3.5rem",
  },
  [theme.breakpoints.down("sm")]:{
    fontSize: "2.5rem",
  },
}));
  return(
  <Box 
    sx={{mt: 8, mb: 12, p:2, maxWidth: "1200px", mx: "auto"}}
    id="home"
    >
      <CustomTitle sx={{color: "white", textAlign: "Center", mb:2 }} variant="h4">
        Yashaswini Kondakindi
      </CustomTitle>
      <Typography sx={{color: "white", textAlign: "Center", mb:2 }} variant="h6">
        <span style={{color: "#5fc9f3"}}>Computer Science</span>
      </Typography>
    <Box
     sx={{
      display:"flex",
      flexDirection: "column",
      alignItems:"center",
      justifyContent: "center",
      gap: "1rem",
     }}
     >
      <Box sx={{display:'flex', mt:4, mb:4}}>
      <About/>
      </Box>
      
      
     <Link to="ContactForm" className="link" smooth>
      <Button sx={{background:"#5fc9f3"}} variant="contained">
      Contact Me
      </Button>
    </Link>
   
    </Box>
  </Box>
  );
};

export default Hero;
