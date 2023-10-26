// "use client"

import React, { useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Box } from '@mui/material';
import { TransformControls, OrbitControls, PivotControls } from '@react-three/drei';

const Environment = () => {
    const [x, setX] = useState(0);
    const cubeRef = React.useRef()
    const threeState = useThree()
    console.log("threeState in Environment is : ", threeState)
    // useFrame((state, delta) => {
    //     cubeRef.current.rotation.y += 0.01
    //     // console.log("state in fraME IS : ", state)

    // })
    return (
        // <OrbitControls ar
        <>
        <OrbitControls makeDefault/>
            <group position-z={-2} >

                <mesh position-x={-2} scale={0.5}>
                    <torusKnotGeometry />
                    <meshBasicMaterial color="blue" />
                </mesh>
             
                  <PivotControls anchor={[0, 0, 0]} depthTest={false} >
                  <mesh position-x={2} scale={1.5}  >
                    <boxGeometry />
                    <meshNormalMaterial />
                </mesh>
                  </PivotControls>
              {/* <TransformControls object={cubeRef} /> */}
                <mesh scale={10} rotation-x={-Math.PI * 0.5} position-y={-1} >
                    <planeGeometry />
                    <meshBasicMaterial color="red" />
                </mesh>
            </group>
        </>
    )
}

export default Environment