import { Text, MeshPortalMaterial, Environment } from '@react-three/drei'
import React from 'react'
const Frame = ({id , name, height,children,...props}) => {
  return (
    <group {...props}>
      <Text color="black" fontSize={0.15} letterSpacing={.5} anchorY="top" anchorX="left" lineHeight={1} position={[-0.3, 0.715, 0.01]}>
        {name}
      </Text>
      <mesh name={id}>
        <roundedPlaneGeometry args={[1, height, 0.1]} />
        <MeshPortalMaterial>
        {/* <ambientLight intensity={1} /> */}
        <Environment preset="sunset" />
          {children}
        </MeshPortalMaterial>
      </mesh>
      <mesh name={id} position={[0, 0, -0.001]}>
        <roundedPlaneGeometry args={[1+ 0.05, height + 0.05, 0.12]} />
        <meshBasicMaterial color="black"/>
      </mesh>
    </group>
  )
}

export default Frame
