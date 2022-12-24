import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Page1: React.FC = () => {

  const Box = () => {
    return (
      <mesh scale={[2,2,2]} rotation={[0.5, 0.5, 0]}>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="#2c3e50" />
      </mesh>
    )
  }

  return (
    <>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10,15,10]} angle={0.3} />
        <Box/>
      </Canvas>
    </>
  )
}

export default Page1;
