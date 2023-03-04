import React, {useEffect} from "react";
import "./sphere2.scss"
import {translate} from "../it8n";

type propType = {
  language: string;
}

const Page: React.FC<propType> = (props) => {
  const {language} = props;

  useEffect(() => {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    if (sessionStorage.getItem('Sphere2') === null) {
      sessionStorage.setItem('Sphere2', String(loadTime))
    }
  }, []);

  return (
    <>
      <h1>{translate("sphere", language)} 2 <span>(Non ThreeJs Powered)</span></h1>
      <section className="stage"
               style={{transform: 'translateX(-68px) translateY(30px) skewX(15deg) skewY(-10deg) scale(0.95);'}}
      >
        <figure className="ball"><span className="shadow"/></figure>
      </section>
      <a className="next-link" href="/pyramid">
        <button>Next &rarr;</button>
      </a>
    </>
  )
}

export default Page;
