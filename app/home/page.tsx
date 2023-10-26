"use client"

import React, {useState} from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@mui/material';
import BaseCanvas from './components/BaseCanvas';
import Environment from './components/Environment';
// import { PlaneGeometry } from 'three';

const page = () => {
  // const [x, setX] = useState(0);
  // const cubeRef = React.useRef()
  // useFrame((state, delta) => {
  //   cubeRef.current.rotation.x = delta

  // })
  return (

<BaseCanvas>

<Environment />
</BaseCanvas>

  )
}

export default page