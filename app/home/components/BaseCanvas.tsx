import React from 'react'
import { Canvas } from '@react-three/fiber';
import { Box } from '@mui/material';
// import { Loader } from 'three';

type Props = {
    children: React.ReactNode
    }

const BaseCanvas: React.FC<Props> = ({children}) => {
  return (
  <Box sx={{
    position: 'absolute',
    top: 48,
    left: 0,
    width: '100%',
    height: '100%'
  }} >
     <Canvas shadows >
    {children}
   </Canvas>
  </Box>
  )
}

export default BaseCanvas