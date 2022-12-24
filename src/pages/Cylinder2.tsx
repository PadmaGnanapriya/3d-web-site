import React from "react";
import "./cylinder2.scss"

const Page: React.FC = () => {
  return (
    <>Page
      <div className="holder">
        <div className="cylinder">
          {
            Array.from(Array(50).keys()).map((element) =>
                <div className="face" style={{transform: `rotateY(${360 / 50 * element}deg) translateZ(${45/3.14159265358979}vw)`}}/>)
          }
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
          <div className="face"/>
        </div>
      </div>
    </>
  )
}

export default Page;
