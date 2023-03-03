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

      {/*<div className="card" onClick={() => navigate('/cube')}>{translate("cube", language)} 1</div>*/}
      {/*<div className="card" onClick={() => navigate('/cube-2')}>{translate("cube", language)} 2</div>*/}
      {/*<div className="card" onClick={() => navigate('/cylinder')}>{translate("cylinder", language)} 1</div>*/}
      {/*<div className="card" onClick={() => navigate('/cylinder-2')}>{translate("cylinder", language)} 2</div>*/}
      {/*<div className="card" onClick={() => navigate('/sphere')}>{translate("sphere", language)} 1</div>*/}
      {/*<div className="card" onClick={() => navigate('/sphere-2')}>{translate("sphere", language)} 2</div>*/}
      {/*<div className="card" onClick={() => navigate('/pyramid')}>{translate("pyramid", language)} 1</div>*/}
      {/*<div className="card" onClick={() => navigate('/pyramid-2')}>{translate("pyramid", language)} 2</div>*/}
    </div>
      <Link to="/feedback">
        <button className="feedback-btn">{translate("feedback", language)} </button>
      </Link>
    </>
  )
}
export default Home;
