
import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three';

export default function Model({clip,...props}) {
    const { nodes, materials, scene } = useGLTF('/goku_super_saiyan_3.glb')
    const clippingPlanes = [
        new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), // zPlane
        new THREE.Plane(new THREE.Vector3(0, 1, 0), 1), // yPlane
      ];
 
 
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        {Object.keys(nodes).map((key) => (
          <mesh key={key} geometry={nodes[key].geometry}>
            <meshStandardMaterial
              attach="material"
              map={ nodes[key].material && nodes[key].material.name ? materials[nodes[key].material?.name].map : null}
              side={THREE.DoubleSide}
              clippingPlanes={clip ? clippingPlanes : null}
            />
          </mesh>
        ))}
      </group>
    </group>
  )
}

useGLTF.preload('/goku_super_saiyan_3.glb')
