import { useRef } from 'react'

const Sphere = (props) => {
  // This reference will give us direct access to the mesh
  const meshRef = useRef()
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
    >
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial color={'#dea6ff'} />
    </mesh>
  )
}

export default Sphere
