import { useGLTF } from '@react-three/drei'
import * as THREE from 'three';
function Model({ clip, ...props }) {
    const { nodes, materials } = useGLTF('/low_poly_mccree-transformed.glb')
    const zPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
    const yPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 1)

    return (
      <mesh geometry={nodes.base.geometry} {...props} dispose={null}>
        <meshBasicMaterial map={materials.PaletteMaterial001.map} side={THREE.DoubleSide}  clippingPlanes={clip ? [zPlane, yPlane] : null} />
      </mesh>
    )
  }

export default Model