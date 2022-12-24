import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Cone1: React.FC = () => {

  const Cone = () => {
    return (
      <mesh scale={[1.1,1.1, 1.1]} rotation={[0.5, 0.5, 0]}>
        <cylinderGeometry attach="geometry" args={[0,1.5,3,4,1]}/>
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
        <Cone/>
      </Canvas>
    </>
  )
}

export default Cone1;
