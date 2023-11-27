import HomePageContainer from '@page-containers/home'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const Home = () => {
  return (
    <Canvas camera={{ fov: 45, position: [10, 15, 10] }} className="canvas">
      <ambientLight intensity={0.2} />
      <directionalLight position={[1, 1, -0.1]} />
      <OrbitControls
        enableDamping={true}
        // enableZoom={false}
        // enableRotate={false}
      />
      <HomePageContainer />
    </Canvas>
  )
}

export default Home
