import { Box, Typography } from "@mui/material";
import React from "react";



const Icon = ({name, src}) => {
  return <Box sx={{display: "flex", flexDirection:"column", alignItems:"center", mb:3}}>
    <img src={src} alt='' height ="40px" width="40px" />
    <Typography variant="body1" sx={{color:"white", mt:1,}}>
      {name}
    </Typography>  
  </Box>;
};

export default Icon;
