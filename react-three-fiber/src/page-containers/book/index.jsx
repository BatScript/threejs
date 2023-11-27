import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Book from './components/Book'
const BookContainer = () => {
  const [active, setActive] = useState(false)
  const [fov, setFov] = useState(45)
  const [cameraPos, setCameraPos] = useState([0, 0, 5])

  return (
    <>
      <button onClick={() => setActive(!active)}>
        click me to toggle the Book
      </button>
      <Canvas shadows camera={{ position: cameraPos, fov }} className="canvas">
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Book
          active={active}
          setActive={setActive}
          setFov={setFov}
          setCameraPos={setCameraPos}
        />
        <OrbitControls
          enableDamping={true}
          enableRotate={false}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </>
  )
}

export default BookContainer
