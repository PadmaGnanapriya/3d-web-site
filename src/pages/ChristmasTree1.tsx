import React, {useEffect, useRef} from 'react';
import {Canvas} from '@react-three/fiber';
import {translate} from "../it8n";
import {Link} from "react-router-dom";
import {OrbitControls, useGLTF} from "@react-three/drei";

type propType = {
  language: string;
}

const ChristmasTree1: React.FC<propType> = (props) => {
  const {language} = props;

  useEffect(() => {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    if (sessionStorage.getItem('ChristmasTree1') === null) {
      sessionStorage.setItem('ChristmasTree1', String(loadTime))
    }
  }, []);

  const GLBModel = () => {
    const glbRef = useRef<any>();
    // @ts-ignore
    const { nodes } = useGLTF("/christmas_tree.glb");

    return (
      <mesh ref={glbRef} scale={0.2}>
        <primitive object={nodes.GLTF_SceneRootNode} dispose={null} />
      </mesh>
    );
  };

  return (
    <>
      <h1>{translate("christmasTree", language)} 1 <span>(ThreeJs Powered)</span></h1>
      <br/>
      <Canvas  style={{height: '85vh'}} camera={{position: [0, -5, 1.5]}} >
        <ambientLight intensity={0.9} />
        <OrbitControls />
        <pointLight position={[10, 10, 10]} />
        <GLBModel />
      </Canvas>
      <Link className="next-link" to="../christmas-tree-2"><button>Next &rarr;</button></Link>
    </>
  )
}

export default ChristmasTree1;
