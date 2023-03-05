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

  const [dragEndX, setDragEndX] = useState(-20);
  const [dragEndY, setDragEndY] = useState(10);
  const [touching, setTouching] = useState(false);

  function handleTouchStart(event: any) {
    setTouching(true);
  }

  function handleTouchMove(event: any) {
    if (!touching) {
      return;
    }
    const touch = event.touches[0];
    setDragEndX(touch.clientX);
    setDragEndY(touch.clientY);
  }

  function handleTouchEnd() {
    setTouching(false);
  }

  function handleMouseMove(event: any) {
    if (!event.buttons) {
      return;
    }
    setDragEndX(event.clientX);
    setDragEndY(event.clientY);
  }
  return (
    < div className="gradient-bg">
      <h1>{translate("christmasTree", language)} 2 <span>(Non ThreeJs Powered)</span></h1>
      <div className="parent-tree-container">
        <div className="christmas-tree-container"
             onTouchStart={handleTouchStart}
             onTouchMove={handleTouchMove}
             onTouchEnd={handleTouchEnd}
             onMouseMove={handleMouseMove}
             style={{transform: `rotateX(${dragEndX}deg) rotateY(${dragEndY}deg)`}}
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
