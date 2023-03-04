import React, {useEffect} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import {translate} from "../it8n";

type propType = {
  language: string;
}

const Cone1: React.FC<propType> = (props) => {
  const {language} = props;

  useEffect(() => {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    if (sessionStorage.getItem('Pyramid1') === null) {
      sessionStorage.setItem('Pyramid1', String(loadTime))
    }
  }, []);

  const Cone = () => {
    return (
      <mesh scale={[1.1, 1, 1.1]} rotation={[0.5, 0.5, 0]}>
        <cylinderGeometry attach="geometry" args={[0, 1.5, 2, 4, 1]}/>
        <meshLambertMaterial attach="material" color="#2c3e50"/>
      </mesh>
    )
  }

  return (
    <>
      <h1>{translate("pyramid", language)} 1 <span>(ThreeJs Powered)</span></h1>
      <Canvas style={{height: '85vh'}}>
        <OrbitControls/>
        <ambientLight intensity={0.5}/>
        <spotLight position={[10, 15, 10]} angle={0.3}/>
        <Cone/>
      </Canvas>
      <a className="next-link" href="/pyramid-2">
        <button>Next &rarr;</button>
      </a>
    </>
  )
}

export default Cone1;
