import React, {useState} from "react";
import "./cylinder2.scss"
import {translate} from "../it8n";

type propType = {
  language: string;
}

const Page: React.FC<propType> = (props) => {
  const {language} = props;

  const [xValue, setXValue] = useState(-20);
  const [yValue, setYValue] = useState(100);

  return (
    <>
      <h1>{translate("cylinder", language)} 2</h1>
      <div className="holder"
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
        <div className="cylinder">
          {
            Array.from(Array(50).keys()).map((element) =>
                <div className="face" style={{transform: `rotateY(${360 / 50 * element}deg) translateZ(${35/3.14159265358979}vw)`}}/>)
          }
        </div>
      </div>
    </>
  )
}

export default Page;
