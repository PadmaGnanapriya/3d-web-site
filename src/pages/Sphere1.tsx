import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Sphere1: React.FC = () => {

  const Sphere = () => {
    return (
      <mesh scale={[1.2,1.2, 1.2]} rotation={[0.5, 0.5, 0]}>
        <sphereGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="#2c3e50" />
      </mesh>
    )
  }

  return (
    <>
      <Canvas style={{height: '85vh'}}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10,15,10]} angle={0.3} />
        <Sphere/>
      </Canvas>
    </>
  )
}

export default Sphere1;
