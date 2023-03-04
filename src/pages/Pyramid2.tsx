import React, {useEffect, useState} from "react";
import "./pyramid2.scss";
import {translate} from "../it8n";

type propType = {
  language: string;
}

const Cube2: React.FC<propType> = (props) => {
  const {language} = props;

  useEffect(() => {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    if (sessionStorage.getItem('Pyramid2') === null) {
      sessionStorage.setItem('Pyramid2', String(loadTime))
    }
  }, []);

  const [dragEndX, setDragEndX] = useState(-20);
  const [dragEndY, setDragEndY] = useState(100);
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
    <>
      <h1>{translate("pyramid", language)} 2 <span>(Non ThreeJs Powered)</span></h1>
      <div id="pyramid-2"
           onTouchStart={handleTouchStart}
           onTouchMove={handleTouchMove}
           onTouchEnd={handleTouchEnd}
           onMouseMove={handleMouseMove}
           style={{transform: `rotateX(${dragEndX}deg) rotateY(${dragEndY}deg)`}}
      >
        {
          [0, 1, 2, 3].map((element) =>
            <div className="triangle"
                 key={element}
                 style={{WebkitTransform: `rotateY(${element * 90}deg) rotateX(30deg) translateZ(63px) translateY(-45px)`}}
            />
          )
        }
        <div style={{WebkitTransform: `rotateX(270deg) rotateY(0deg) translateZ(-15px)`}}/>
      </div>
      <a className="next-link" href="/christmas-tree">
        <button>Next &rarr;</button>
      </a>
    </>
  )
}

export default Cube2
