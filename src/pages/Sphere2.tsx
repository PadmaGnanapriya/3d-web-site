import React, {useState} from "react";
import "./sphere2.scss"

const Page: React.FC = () => {
  const [xValue, setXValue] = useState(-20);
  const [yValue, setYValue] = useState(10);

  return (
    <section className="stage"
             onDrag={(e) => {
               console.log(e.clientX, e.clientY);
               if (e.clientX !== 0) {
                 setYValue(e.clientX)
               }
               if (e.clientY !== 0) {
                 setXValue(e.clientY);
               }
             }}
             style={{transform: 'translateX(-68px) translateY(30px) skewX(15deg) skewY(-10deg) scale(0.95);'}}
             // style={{transform: `rotateX(${xValue}deg) rotateY(${yValue}deg)`}}
    >
      <figure className="ball"><span className="shadow"/></figure>
    </section>  )
}

export default Page;
