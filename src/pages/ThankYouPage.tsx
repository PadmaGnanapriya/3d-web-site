import React from "react";
import {translate} from "../it8n";
import {Link} from "react-router-dom";
import "./thank-you-page.scss"

type propType = {
  language: string;
}

const ThankYouPage: React.FC<propType> = (props) => {
  const {language} = props;

  return (
    <div className="thank-you-page">
      <br/>
      <br/>
      <h1 title="Click to Copy" onClick={() => {
        navigator.clipboard.writeText('https://uniload3d.netlify.app').then(() => console.log())
      }}>
        https://uniload3d.netlify.app</h1>
      <br/>
      <br/>
      <div className="flex-div">
        <p>{translate("thanksSubmission", language)}</p>
      </div>
      <br/>
      <Link to="/">
        <button className="feedback-btn">Back To Home Page</button>
      </Link>
      <br/>
      <br/>
      <div className="notice-thank-you">
        <p>
          Mobile: +94 76 632 8189<br/>
          email: <a href="mailto: padmaisuru@gmail.com">padmaisuru@gmail.com</a>
          <br/>
        </p>
      </div>
      <br/>
    </div>
  )
}
export default ThankYouPage;
