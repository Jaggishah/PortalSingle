import React from 'react'
import { Canvas, extend } from '@react-three/fiber'
import {  Environment, Sky } from '@react-three/drei'
import { CameraControls } from '@react-three/drei'
import { geometry } from 'maath'
import Frame from './Frame'
import Model from "./Model"
import Goku from "./Goku"

extend(geometry)

const Main = () => {
const GOLDENRATIO = 1.61803398875
  return (
    <Canvas gl={{ localClippingEnabled: true }} camera={{ fov: 75, position: [0, 0, 1.5] }} eventSource={document.getElementById('root')} eventPrefix="client">
        <color attach="background" args={['#f0f0f0']} />
        <Environment preset="sunset" />
        <Frame id="01" name="Jaggi" height={GOLDENRATIO}>
            <Sky />
            {/* <Model position={[0, -2, 0]}/> */}
            <Goku  clip={false} scale={0.1} position={[0, -1.3, 0]}/>
        </Frame>
        <Goku clip scale={0.1} position={[0, -1.3, 0]}/>
        {/* <Model clip position={[0, -2, 0]} /> */}
      <CameraControls makeDefault minAzimuthAngle={-Math.PI / 2.5} maxAzimuthAngle={Math.PI / 2.5} minPolarAngle={0.5} maxPolarAngle={Math.PI / 2}  maxDistance={8} />
    </Canvas>
  )
}

export default Main
