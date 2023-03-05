import React, {useEffect} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import {translate} from "../it8n";

type propType = {
  language: string;
}

const Cylinder1: React.FC<propType> = (props) => {
  const {language} = props;

  useEffect(() => {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    const {duration} = performance.measure('finished');
    if (sessionStorage.getItem('Cylinder1') === null) {
      sessionStorage.setItem('Cylinder1', `${loadTime}, ${Math.trunc(duration)}`)
    }
  }, []);

  const Cylinder = () => {
    return (
      <mesh scale={[1.2, 2.4, 1.2]} rotation={[0.5, 0.5, 0]}>
        <cylinderBufferGeometry attach="geometry"/>
        <meshLambertMaterial attach="material" color="#2c3e50"/>
      </mesh>
    )
  }

  return (
    <>
      <h1>{translate("cylinder", language)} 1 <span>(ThreeJs Powered)</span></h1>
      <Canvas style={{height: '85vh'}}>
        <OrbitControls/>
        <ambientLight intensity={0.5}/>
        <spotLight position={[10, 15, 10]} angle={0.3}/>
        <Cylinder/>
      </Canvas>
      <a className="next-link" href="/cylinder-2">
        <button>Next &rarr;</button>
      </a>
    </>
  )
}

export default Cylinder1;
