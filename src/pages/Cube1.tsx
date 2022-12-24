import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Cube1: React.FC = () => {

  const Box = () => {
    return (
      <mesh scale={[2,2,2]} rotation={[0.5, 0.5, 0]}>
        <boxBufferGeometry attach="geometry" />
        <meshPhongMaterial attach="material" color="#2c3e50" />
        {/*<meshLambertMaterial attach="material" color="#2c3e50" />*/}
        {/*<meshBasicMaterial attach="material" color="#2c3e50" wireframe={false}/>*/}
      </mesh>
    )
  }

  return (
    <>
      <Canvas style={{height: '85vh'}}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        {/*<spotLight position={[10,15,10]} angle={0.3} />*/}
        <directionalLight color="#ffffff" intensity={1} position={[-1, 2, 4]} />

        <Box/>
      </Canvas>
    </>
  )
}

export default Cube1;
