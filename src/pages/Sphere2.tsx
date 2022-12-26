import React from "react";
import "./sphere2.scss"
import {translate} from "../it8n";

type propType = {
  language: string;
}

const Page: React.FC<propType> = (props) => {
  const {language} = props;

  return (
    <>
      <h1>{translate("sphere", language)} 2</h1>
      <section className="stage"
               style={{transform: 'translateX(-68px) translateY(30px) skewX(15deg) skewY(-10deg) scale(0.95);'}}
      >
        <figure className="ball"><span className="shadow"/></figure>
      </section>
    </>
  )
}

export default Page;
