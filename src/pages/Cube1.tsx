import React, {useEffect} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import {translate} from "../it8n";

type propType = {
  language: string;
}

const Cube1: React.FC<propType> = (props) => {
  const {language} = props;

  useEffect(() => {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    const {duration} = performance.measure('finished');
    if (sessionStorage.getItem('Cube1') === null) {
      sessionStorage.setItem('Cube1', `${loadTime}, ${Math.trunc(duration)}`)
    }
  }, []);

  const Box = () => {
    return (
      <mesh scale={[2, 2, 2]} rotation={[.5, 0.5, 0]}>
        <boxBufferGeometry attach="geometry"/>
        <meshPhongMaterial attach="material" color="#2c3e50"/>
      </mesh>
    )
  }

  return (
    <>
      <h1>{translate("cube", language)} 1 <span>(ThreeJs Powered)</span></h1>
      <Canvas style={{height: '85vh'}}>
        <OrbitControls/>
        <ambientLight intensity={0.5}/>
        <directionalLight color="#ffffff" intensity={1} position={[-1, 2, 4]}/>
        <Box/>
      </Canvas>
      <a className="next-link" href="/cube-2">
        <button>Next &rarr;</button>
      </a>
    </>
  )
}

export default Cube1;
