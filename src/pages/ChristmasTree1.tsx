import React, {useEffect, useRef} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import {translate} from "../it8n";
import {OrbitControls, useGLTF} from "@react-three/drei";

type propType = {
  language: string;
}

const ChristmasTree1: React.FC<propType> = (props) => {
  const {language} = props;

  /**
   *       window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart measures the
      time it takes for the page's DOM to be fully loaded and parsed. This is useful for measuring the time it
      takes for the user to see and interact with the content on the page.
   *       performance.measure('load') measures the time it takes for the entire page, including all resources
      (images, stylesheets, scripts, etc.) to be loaded and rendered. This is useful for measuring the time it
      takes for the page to be fully loaded and for all elements to be visible.
   *       Therefore, which method to use depends on what exactly you want to measure. If you want to measure only
      the DOM load time, use the first method. If you want to measure the full page load time, including all
      resources, use the second method.
   */
  useEffect(() => {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    const {duration} = performance.measure('finished');
    if (sessionStorage.getItem('ChristmasTree1') === null) {
      sessionStorage.setItem('ChristmasTree1', `${loadTime}, ${Math.trunc(duration)}`)
    }
  }, []);

  const GLBModel = () => {
    const glbRef = useRef<any>();
    // @ts-ignore
    const {nodes} = useGLTF("/christmas_tree.glb");

    useFrame(() => {
      glbRef.current.rotation.z += 0.01
    })

    return (
      <mesh ref={glbRef} scale={0.2}>
        <primitive object={nodes.GLTF_SceneRootNode} dispose={null}/>
      </mesh>
    );
  };

  return (
    <>
      <h1>{translate("christmasTree", language)} 1 <span>(ThreeJs Powered)</span></h1>
      <br/>
      <Canvas style={{height: '85vh'}} camera={{position: [0, -5, 1.5]}}>
        <ambientLight intensity={0.9}/>
        <OrbitControls/>
        <pointLight position={[10, 10, 10]}/>
        <GLBModel/>
      </Canvas>
      <a className="next-link" href="/christmas-tree-2">
        <button>Next &rarr;</button>
      </a>
    </>
  )
}

export default ChristmasTree1;
