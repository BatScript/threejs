import { useRef, useState } from 'react'
import { Html } from '@react-three/drei'

const Box = ({
  position = [0, 0, 0],
  boxGeometryArgs = [5, 7, 0.5],
  boxGeometryColor = '#dea6ff',
  rotation,
  text
}) => {
  // This reference will give us direct access to the mesh
  const meshRef = useRef()
  // Return vie, these are regular three.js elements expressed in JSX
  return (
    <mesh rotation={rotation} ref={meshRef} position={position}>
      {text && (
        <Html>
          <span>{text}</span>
        </Html>
      )}
      <boxGeometry args={boxGeometryArgs} />
      <meshStandardMaterial color={boxGeometryColor} />
    </mesh>
  )
}

export default Box
