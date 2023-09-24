import { Box, Typography } from "@mui/material";
import React from "react";
import { projects } from "../constants/project";
import Project from "./Project";
import Stack from "./Stack";



const Experience = () => {
  return <Box sx={{maxWidth: "1300px", mx:"auto", marginTop:"auto", marginBottom:"auto"}} id="experience">
    <Typography variant="h4" sx={{color:"white", textAlign:"center", mb:2}}>
      Projects that I've <span style={{color:"#5fc9f3"}}>built</span> so far!
    </Typography>
    <Box sx={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
      {
        projects.map((project)=>(
          <Project
          key={project.id}
          title={project.title}
          description={project.description}
          tags={project.tags}
          img={project.image}
          source={project.source}
          />
        ))
      }

    </Box>
    <Stack id="stack" />
  </Box>;
};

export default Experience;
