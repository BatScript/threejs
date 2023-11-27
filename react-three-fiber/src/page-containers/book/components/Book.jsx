import { a, useSpring } from '@react-spring/three'
import { useState } from 'react'

const Book = ({ active, setActive }) => {
  const [leftThickness, setLeftThickness] = useState(0.05)
  const [rightThickness, setRightThickness] = useState(0.05)
  const { rotateL, rotateR, cam, scale, pos, leftSec, rightSec } = useSpring({
    rotateL: [0, 0, active ? -Math.PI / 3 : 0],
    rotateR: [0, 0, active ? Math.PI / 3 : 0],
    cam: [active ? 1.9 : 1.6, 0, 0],
    scale: active ? 2.5 : 1,
    pos: [active ? -1 : 0, 0, 0],
    leftSec: [0.99, 1, active ? leftThickness : 0.15],
    rightSec: [0.99, 1, active ? rightThickness : 0.15]
  })

  const onPageClick = (e) => {
    // 0.99, 1, 0.1
    console.log(e.point)
    setLeftThickness(1 - e.point.z)
    setRightThickness(0.1 - (1 - e.point.z))
    console.log(leftThickness, rightThickness)
    setActive(!active)
  }

  return (
    <>
      <a.group rotation={cam} scale={scale} position={pos}>
        {/* cover 1 */}
        <a.group rotation={rotateR}>
          <a.mesh
            receiveShadow
            position={[-0.07, 0.535, 0]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[1.1, 0.02, 1]}
          >
            <boxGeometry />
            <meshStandardMaterial color="orange" />
          </a.mesh>
        </a.group>

        {/* cover 2 */}
        <a.group rotation={rotateL}>
          <a.mesh
            receiveShadow
            position={[0.07, 0.535, 0]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[1.1, 0.02, 1]}
          >
            <boxGeometry />
            <meshStandardMaterial color="orange" />
          </a.mesh>
        </a.group>

        {/* book hinge */}
        <a.mesh
          receiveShadow
          rotation={[0, 0, 0]}
          position={[0, 0, 0]}
          scale={[0.15, 0.03, 1]}
        >
          <boxGeometry />
          <meshStandardMaterial color="orange" />
        </a.mesh>

        {/* page */}
        <a.group onClick={onPageClick}>
          {/* left section */}
          <a.group rotation={rotateL}>
            <a.mesh
              receiveShadow
              position={[0, 0.5, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={leftSec}
            >
              <boxGeometry />
              <meshStandardMaterial color={'white'} />
            </a.mesh>
          </a.group>
          {/* right section */}
          <a.group rotation={rotateR}>
            <a.mesh
              receiveShadow
              position={[0, 0.5, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={rightSec}
            >
              <boxGeometry />
              <meshStandardMaterial color={'white'} />
            </a.mesh>
          </a.group>
        </a.group>
      </a.group>
    </>
  )
}

export default Book
