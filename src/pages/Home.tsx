import React from "react";
import {translate} from "../it8n";
import {useNavigate} from "react-router-dom";
import "./home.scss";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-div">
      <div className="card" onClick={() => navigate('/cone')}>{translate("cone", "SI")} 1</div>
      <div className="card" onClick={() => navigate('/cone-2')}>{translate("cone", "SI")} 2</div>
      <div className="card" onClick={() => navigate('/cube')}>{translate("cube", "SI")} 1</div>
      <div className="card" onClick={() => navigate('/cube-2')}>{translate("cube", "SI")} 2</div>
      <div className="card" onClick={() => navigate('/cylinder')}>{translate("cylinder", "SI")} 1</div>
      <div className="card" onClick={() => navigate('/cylinder-2')}>{translate("cylinder", "SI")} 2</div>
      <div className="card" onClick={() => navigate('/sphere')}>{translate("sphere", "SI")} 1</div>
      <div className="card" onClick={() => navigate('/sphere-2')}>{translate("sphere", "SI")} 2</div>
      <div className="card" onClick={() => navigate('/pyramid')}>{translate("pyramid", "SI")} 1</div>
      <div className="card" onClick={() => navigate('/pyramid-2')}>{translate("pyramid", "SI")} 2</div>
      <div className="card" onClick={() => navigate('/prism')}>{translate("prism", "SI")} 1</div>
      <div className="card" onClick={() => navigate('/prism-2')}>{translate("prism", "SI")} 2</div>
    </div>
  )
}
export default Home;
