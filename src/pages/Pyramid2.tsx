import React, {useState} from "react";
import "./pyramid2.scss";

const Cube2: React.FC = () => {
  const [xValue, setXValue] = useState(-20);
  const [yValue, setYValue] = useState(100);

  console.log(xValue, yValue);
  return (
    <>
      <h1>Pyramid 2</h1>
      <div id="pyramid-2"
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
            <div className="triangle"
              key={element}
              style={{WebkitTransform: `rotateY(${element * 90}deg) rotateX(30deg) translateZ(63px) translateY(-45px)`}}
            />
          )
        }
        <div style={{WebkitTransform: `rotateX(270deg) rotateY(0deg) translateZ(-15px)`}}/>
        {/*<div style={{WebkitTransform: `rotateX(${90}deg) translateZ(63px)`}}/>*/}
      </div>
    </>
  )
}

export default Cube2
