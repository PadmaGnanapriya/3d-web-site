import React from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import {translate} from "../it8n";

type propType = {
  language: string;
}

const Sphere1: React.FC<propType> = (props) => {
  const {language} = props;

  const Sphere = () => {
    return (
      <mesh scale={[1.4, 1.4, 1.4]} rotation={[0.5, 0.5, 0]}>
        <sphereGeometry attach="geometry"/>
        <meshLambertMaterial attach="material" color="#2c3e50"/>
      </mesh>
    )
  }

  return (
    <>
      <h1>{translate("sphere", language)} 1</h1>
      <Canvas style={{height: '85vh'}}>
        <OrbitControls/>
        <ambientLight intensity={0.5}/>
        <spotLight position={[10, 15, 10]} angle={0.3}/>
        <Sphere/>
      </Canvas>
    </>
  )
}

export default Sphere1;
