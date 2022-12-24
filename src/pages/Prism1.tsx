import React from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';

const Cylinder1: React.FC = () => {

  const Cylinder = () => {
    return (
      <mesh scale={[1.2, 2.4, 1.2]} rotation={[0.5, 0.5, 0]}>
        <cylinderBufferGeometry attach="geometry" args={[3, 2.5, 3, 3, 1]}/>
        <meshLambertMaterial attach="material" color="#2c3e50" />
      </mesh>
    )
  }

  return (
    <>
      <Canvas style={{height: '85vh'}}>
        <OrbitControls/>
        <ambientLight intensity={0.5}/>
        <Cylinder/>
      </Canvas>
    </>
  )
}

export default Cylinder1;
