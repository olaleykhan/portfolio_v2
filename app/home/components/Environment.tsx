"use client"

import React, { useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Box } from '@mui/material';
import { TransformControls, OrbitControls, PivotControls, Environment } from '@react-three/drei';
import {Perf} from 'r3f-perf';

const BaseEnv = () => {

    return (
       
        <>
        <Environment preset='park' />
        <color args={["ivory"]} attach="background" />
        <Perf position="top-left" />
        {/* <DirectionalLight /> */}
        {/* <ambientLight intensity={1.5} /> */}  
        <OrbitControls makeDefault/>
            <group position-z={-2} >

                <mesh position-x={-2} scale={0.5}>
                    <torusKnotGeometry />
                    <meshStandardMaterial color="red" />
                </mesh>
             
                  <PivotControls anchor={[0, 0, 0]} depthTest={false} >
                  <mesh position-x={2} scale={1.5}  >
                    <boxGeometry />
                    <meshStandardMaterial color="pink" />
                </mesh>
                  </PivotControls>
              {/* <TransformControls object={cubeRef} /> */}
                <mesh scale={10} rotation-x={-Math.PI * 0.5} position-y={-1} >
                    <planeGeometry />
                    <meshStandardMaterial color="grey" />
                </mesh>
            </group>
        </>
    )
}

export default BaseEnv