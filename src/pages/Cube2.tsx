import React, {useEffect, useState} from "react";
import "./cube2.scss";
import {translate} from "../it8n";
import {Link} from "react-router-dom";

type propType = {
  language: string;
}

const Cube2: React.FC<propType> = (props) => {
  const {language} = props;

  useEffect(() => {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    if (sessionStorage.getItem('Cube2') === null) {
      sessionStorage.setItem('Cube2', String(loadTime))
    }
  }, []);

  const [xValue, setXValue] = useState(-20);
  const [yValue, setYValue] = useState(100);

  return (
    <>
      <h1>{translate("cube", language)} 2 <span>(Non ThreeJs Powered)</span></h1>
      <div id="cube-2"
           onDrag={(e) => {
             console.log(e.clientX, e.clientY);
             if (e.clientX !== 0) {
               setYValue(e.clientX)
             }
             if (e.clientY !== 0) {
               setXValue(e.clientY);
             }
           }}
           style={{transform: `rotateX(${xValue}deg) rotateY(${yValue}deg)`}}
      >
        {
          [0, 1, 2, 3].map((element) =>
            <div
              key={element}
              style={{WebkitTransform: `rotateY(${element * 90}deg) translateZ(63px)`}}
            />
          )
        }
        <div style={{WebkitTransform: `rotateX(270deg) rotateY(0deg) translateZ(63px)`}}/>
        <div style={{WebkitTransform: `rotateX(90deg) translateZ(63px)`}}/>
      </div>
      <Link className="next-link" to="../cylinder"><button>Next &rarr;</button></Link>
    </>
  )
}

export default Cube2
