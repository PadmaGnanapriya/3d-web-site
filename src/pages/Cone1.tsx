import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Cone1: React.FC = () => {

  const Cone = () => {
    return (
      <mesh scale={[2,5,2]} rotation={[0.5, 0.5, 0]}>
        <coneBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="#2c3e50" />
      </mesh>
    )
  }

  return (
    <>
      <Canvas style={{height: '85vh'}}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight color="#ffffff" intensity={1} position={[-1, 2, 4]} />
        {/*<spotLight position={[10,15,10]} angle={0.3} />*/}
        <Cone/>
      </Canvas>
    </>
  )
}

export default Cone1;
