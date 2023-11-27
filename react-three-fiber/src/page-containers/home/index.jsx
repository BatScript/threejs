import { useRef, useState } from 'react'
import { a, animated, useSpring } from '@react-spring/three'
import { useFrame } from '@react-three/fiber'

export const HomePageContainer = () => {
  const boxDimensions = {
    length: 5,
    width: 8,
    height: 0.1
  }

  const Box = () => {
    const [active, setActive] = useState(0)

    const springs = useSpring({
      rotation: active ? 2 : 0
    })

    // interpolate values from commong spring
    // const rotation = spring.to([0, 3], [0, Math.PI / 2])
    // const color = spring.to([0, 1], ['#6246ea', '#e45858'])

    return (
      <a.group>
        <a.mesh
          rotation-x={springs.rotation}
          onClick={() => setActive(Number(!active))}
        >
          <boxGeometry
            attach="geometry"
            args={[
              boxDimensions.length,
              boxDimensions.width,
              boxDimensions.height
            ]}
          />
          <a.meshStandardMaterial
            roughness={0.5}
            attach="material"
            color={'#6246ea'}
          />
        </a.mesh>
      </a.group>
    )
  }

  return (
    <>
      <Box />
      {/* <Box position={[0, 0, 0]} boxGeometryArgs={[5, 7, 0.1]} />
      <Box
        position={[0, 0, 1]}
        rotation={rotation2}
        boxGeometryArgs={[5, 7, 0.1]}
      /> */}
    </>
  )
}

export default HomePageContainer
