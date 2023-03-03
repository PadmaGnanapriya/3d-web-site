import React, {useEffect, useState} from "react";
import "./cylinder2.scss"
import {translate} from "../it8n";
import {Link} from "react-router-dom";

type propType = {
  language: string;
}

const Page: React.FC<propType> = (props) => {
  const {language} = props;

  useEffect(() => {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    if (sessionStorage.getItem('Cylinder2') === null) {
      sessionStorage.setItem('Cylinder2', String(loadTime))
    }
  }, []);

  const [xValue, setXValue] = useState(-20);
  const [yValue, setYValue] = useState(100);

  return (
    <>
      <h1>{translate("cylinder", language)} 2 <span>(Non ThreeJs Powered)</span></h1>
      <div className="holder"
           onDrag={(e) => {
             if (e.clientX !== 0) {
               setYValue(e.clientX)
             }
             if (e.clientY !== 0) {
               setXValue(e.clientY);
             }
           }}
           style={{transform: `rotateX(${xValue}deg) rotateY(${yValue}deg)`}}
      >
        <div className="cylinder">
          {
            Array.from(Array(50).keys()).map((element) =>
                <div key={element} className="face" style={{transform: `rotateY(${360 / 50 * element}deg) translateZ(${35/3.14159265358979}vw)`}}/>)
          }
        </div>
      </div>
      <Link className="next-link" to="../sphere"><button>Next &rarr;</button></Link>
    </>
  )
}

export default Page;
