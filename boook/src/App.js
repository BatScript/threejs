import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { AccumulativeShadows, OrbitControls, OrthographicCamera, RandomizedLight, RenderTexture, Text } from '@react-three/drei'
import { suspend } from 'suspend-react'

const inter = import('@pmndrs/assets/fonts/inter_regular.woff')

function Book() {
  const ref = useRef()
  const [active, setActive] = useState(false)

  
  // useFrame((state, delta) => { -Math.PI / 5.5
  //   ref.current.rotation.z = -Math.PI / 2 + Math.sin(state.clock.elapsedTime)
  // })
  return (
    <group onClick={() => setActive(!active)}>
      {/* cover 1 */}
      <mesh castShadow receiveShadow position={[-0.07, 0.5, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[1.1, 0.05, 1]}>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
      {/* cover 2 */}
      <mesh castShadow receiveShadow position={[0.07, 0.5, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[1.1, 0.05, 1]}>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
      {/* book hinge */}
      <mesh castShadow receiveShadow position={[0, -0.03, 0]} scale={[0.102, 0.045, 1]}>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
      {/* page */}
      <group ref={ref}>
        <mesh castShadow receiveShadow position={[0, 0.5, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <planeGeometry />
          <meshStandardMaterial side={THREE.DoubleSide}>
            <RenderTexture attach="map">
              <color attach="background" args={['white']} />
              <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={100} />
              <Text font={suspend(inter).default} color="black">
                Hi!
              </Text>
            </RenderTexture>
          </meshStandardMaterial>
        </mesh>
      </group>
    </group>
  )
}

export default function App() {
  return (
    <Canvas shadows camera={{ position: [1, 2, 5], fov: 35 }}>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} castShadow />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Book />
      <AccumulativeShadows temporal frames={100} position={[0, -0.05, 0]} color="orange">
        <RandomizedLight radius={10} position={[5, 5, 10]} />
      </AccumulativeShadows>
      <OrbitControls />
    </Canvas>
  )
}
