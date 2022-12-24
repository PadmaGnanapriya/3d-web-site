import React from "react";
import "./page2.css";

const Page2: React.FC = () => {

  return (
    <>
      <h1>Page 2</h1>
      <div id="shape">
        {
          [0, 1, 2, 3].map((element) =>
            <div
              style={{WebkitTransform: `rotateY(${element * 90}deg) translateZ(63px)`}}
            />
          )
        }
        <div style={{WebkitTransform: 'rotateX(270deg) rotateY(0deg) translateZ(63px)'}}/>
        <div style={{WebkitTransform: 'rotateX(90deg) translateZ(63px)'}}/>
      </div>
    </>
  )
}

export default Page2
