import React, {useEffect, useState} from 'react';
import {translate} from "../it8n";
import './christmasTree2.scss'

type propType = {
  language: string;
}

const ChristmasTree2: React.FC<propType> = (props) => {
  const {language} = props;

  useEffect(() => {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    if (sessionStorage.getItem('ChristmasTree2') === null) {
      sessionStorage.setItem('ChristmasTree2', String(loadTime))
    }
  }, []);

  const [xValue, setXValue] = useState(-20);
  const [yValue, setYValue] = useState(10);
  return (
    < div className="gradient-bg">
      <h1>{translate("christmasTree", language)} 2 <span>(Non ThreeJs Powered)</span></h1>
      <div className="parent-tree-container">
        <div className="christmas-tree-container"
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
          <div className="shadow"/>
          <div className="christmas-tree">
            <div className="branches">
              {
                Array.from(Array(110).keys()).map((element) =>
                  <div key={element} className="branch" style={{
                    height: `${130 - element}px`,
                    width: '10px',
                    transform: `translateZ(${element * 2}px) rotate(${Math.random() * 360}deg)`
                  }}/>)
              }
            </div>
            <div className="ornaments">
              {
                Array.from(Array(40).keys()).map((element) => {
                    let pos = 10 + Math.random() * 90;
                    return (
                      <div className="ornament" key={element}
                           style={{transform: `rotateZ(${element % 6 * 60 + Math.random() * 60}deg) translateX(${60 - pos / 2}px) translateZ(${pos * 2}px) rotateY(75deg)`}}/>
                    )
                  }
                )
              }
            </div>
            <div className="tree-top">
              {
                Array.from(Array(10).keys()).map((element) =>
                  <div className="star" key={element}
                       style={{transform: `translateZ(225px) translateY(${-4 - (element / 4)}px) rotateX(-90deg)`}}/>
                )
              }
            </div>
          </div>
        </div>
        <a className="next-link" href="/feedback">
          <button>Next &rarr;</button>
        </a>
      </div>
    </div>
  )
}

export default ChristmasTree2;
