import { a, useSpring } from '@react-spring/three'
import { OrthographicCamera, RenderTexture, Text } from '@react-three/drei'
import { useState } from 'react'

const Book = ({ active, setActive }) => {
  const { rotateL, rotateR, cam, scale, pos } = useSpring({
    rotateL: [0, 0, active ? -Math.PI / 3 : 0],
    rotateR: [0, 0, active ? Math.PI / 3 : 0],
    cam: [active ? 1.9 : 1.6, 0, 0],
    scale: active ? 2.5 : 1,
    pos: [active ? -1 : 0, 0, 0]
  })

  const onPageClick = (e) => {
    setActive(!active)
    console.log(e.point)
  }

  return (
    <>
      <a.group rotation={cam} scale={scale} position={pos}>
        {/* cover 1 */}
        <a.group rotation={rotateR}>
          <a.mesh
            receiveShadow
            position={[-0.07, 0.5, 0]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[1.1, 0.05, 1]}
          >
            <boxGeometry />
            <meshStandardMaterial color="orange" />
          </a.mesh>
        </a.group>

        {/* cover 2 */}
        <a.group rotation={rotateL}>
          <a.mesh
            receiveShadow
            position={[0.07, 0.5, 0]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[1.1, 0.05, 1]}
          >
            <boxGeometry />
            <meshStandardMaterial color="orange" />
          </a.mesh>
        </a.group>

        {/* book hinge */}
        <a.mesh
          receiveShadow
          rotation={[0, 0, 0]}
          position={[0, -0.03, 0]}
          scale={[0.102, 0.045, 1]}
        >
          <boxGeometry />
          <meshStandardMaterial color="orange" />
        </a.mesh>

        {/* page */}
        <a.group onClick={onPageClick} rotation={rotateL}>
          <a.mesh
            receiveShadow
            position={[0, 0.5, 0]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[0.99, 1, 0.1]}
          >
            <boxGeometry />
            <meshStandardMaterial color={'white'} />
          </a.mesh>
        </a.group>
      </a.group>
    </>
  )
}

export default Book
