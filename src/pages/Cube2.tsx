import React, {useEffect, useState} from "react";
import "./cube2.scss";
import {translate} from "../it8n";

type propType = {
  language: string;
}

const Cube2: React.FC<propType> = (props) => {
  const {language} = props;

  useEffect(() => {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    const {duration} = performance.measure('finished');
    if (sessionStorage.getItem('Cube2') === null) {
      sessionStorage.setItem('Cube2', `${loadTime}, ${Math.trunc(duration)}`)
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
      <h1>{translate("cube", language)} 2 <span>(Non ThreeJs Powered)</span></h1>
      <div id="cube-2"
           onTouchStart={handleTouchStart}
           onTouchMove={handleTouchMove}
           onTouchEnd={handleTouchEnd}
           onMouseMove={handleMouseMove}
           style={{transform: `rotateX(${dragEndX}deg) rotateY(${dragEndY}deg)`}}
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
      <a className="next-link" href="/cylinder">
        <button>Next &rarr;</button>
      </a>
    </>
  )
}

export default Cube2
