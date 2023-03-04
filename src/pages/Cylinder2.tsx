import React, {useEffect, useState} from "react";
import "./cylinder2.scss"
import {translate} from "../it8n";

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
      <h1>{translate("cylinder", language)} 2 <span>(Non ThreeJs Powered)</span></h1>
      <div className="holder"
           onTouchStart={handleTouchStart}
           onTouchMove={handleTouchMove}
           onTouchEnd={handleTouchEnd}
           onMouseMove={handleMouseMove}
           style={{transform: `rotateX(${dragEndX}deg) rotateY(${dragEndY}deg)`}}
      >
        <div className="cylinder">
          {
            Array.from(Array(50).keys()).map((element) =>
              <div key={element} className="face"
                   style={{transform: `rotateY(${360 / 50 * element}deg) translateZ(${35 / 3.14159265358979}vw)`}}/>)
          }
        </div>
      </div>
      <a className="next-link" href="/sphere">
        <button>Next &rarr;</button>
      </a>
    </>
  )
}

export default Page;
