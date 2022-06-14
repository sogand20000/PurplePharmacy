import React from 'react';
import { Box } from "native-base";
let bg1="red" ;

export const Alert=({text,type}:any)=>{return(

    <Box bg={type==="error" ? "red.500":"emerald.500"}   px="2" py="1" rounded="sm" mb={5}>
    {text}
  </Box>
  
)}
