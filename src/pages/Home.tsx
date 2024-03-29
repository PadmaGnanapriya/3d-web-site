import React from "react";
import {translate} from "../it8n";
import {Link} from "react-router-dom";
import "./home.scss";

type propType = {
  language: string;
}

const Home: React.FC<propType> = (props) => {
  const {language} = props;

  return (
    <>
      <div className="flex-div">
        <p style={{textAlign: "left"}}> &emsp;{translate("description", language)} <br/>
          &emsp;{translate("thankYou", language)}</p>
        <Link to="/cube">
          <div className="card">{translate("cube", language)} 1</div>
        </Link>
        <Link to="/cube-2">
          <div className="card">{translate("cube", language)} 2</div>
        </Link>
        <Link to="/cylinder">
          <div className="card">{translate("cylinder", language)} 1</div>
        </Link>
        <Link to="/cylinder-2">
          <div className="card">{translate("cylinder", language)} 2</div>
        </Link>
        <Link to="/sphere">
          <div className="card">{translate("sphere", language)} 1</div>
        </Link>
        <Link to="/sphere-2">
          <div className="card">{translate("sphere", language)} 2</div>
        </Link>
        <Link to="/pyramid">
          <div className="card">{translate("pyramid", language)} 1</div>
        </Link>
        <Link to="/pyramid-2">
          <div className="card">{translate("pyramid", language)} 2</div>
        </Link>
        <Link to="/christmas-tree">
          <div className="card">{translate("christmasTree", language)} 1</div>
        </Link>
        <Link to="/christmas-tree-2">
          <div className="card">{translate("christmasTree", language)} 2</div>
        </Link>
      </div>
      <Link to="/feedback">
        <button className="feedback-btn">{translate("feedback", language)} </button>
      </Link>

      <br/>
      <div className="notice-home">
        <p>
          Mobile: +94 76 632 8189<br/>
          email: <a href = "mailto: padmaisuru@gmail.com">padmaisuru@gmail.com</a>
          <br/>
        </p>
      </div>
      <br/>
    </>
  )
}
export default Home;
