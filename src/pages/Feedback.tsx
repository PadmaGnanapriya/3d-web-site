import React, {useState} from "react";
import {translate} from "../it8n";
import CreatableSelect from 'react-select/creatable';
import "./feedback.scss"


type propType = {
  language: string;
}

const Home: React.FC<propType> = (props) => {
  const {language} = props;

  const cube1LoadTime = sessionStorage.getItem('Cube1');
  const cube2LoadTime = sessionStorage.getItem('Cube2');
  const Cylinder1LoadTime = sessionStorage.getItem('Cylinder1');
  const Cylinder2LoadTime = sessionStorage.getItem('Cylinder2');
  const pyramid1LoadTime = sessionStorage.getItem('Pyramid1');
  const pyramid2LoadTime = sessionStorage.getItem('Pyramid2');
  const sphere1LoadTime = sessionStorage.getItem('Sphere1');
  const sphere2LoadTime = sessionStorage.getItem('Sphere2');


  const isDisabled = !(cube1LoadTime && cube2LoadTime && Cylinder1LoadTime && Cylinder2LoadTime &&
    pyramid1LoadTime && pyramid2LoadTime && sphere1LoadTime && sphere2LoadTime)


  const [role, setRole] = useState<string | null>('');
  const [serviceProvider, setServiceProvider] = useState<string | null>('');
  const [network, setNetwork] = useState<string | null>('');
  const [ratingForThreeJsPowered, setRatingForThreeJsPowered] = useState<string | null>('');
  const [ratingForNonThreeJsPowered, setRatingForNonThreeJsPowered] = useState<string | null>('');
  const [isThreeJsDelayed, setIsThreeJsDelayed] = useState<string | null>('');
  const [isThreeJsNavigatable, setIsThreeJsNavigatable] = useState<string | null>('');
  const [isNonThreeJsNavigatable, setIsNonThreeJsNavigatable] = useState<string | null>('');
  const [isThreeJsLoadingTimeImpact, setIsThreeJsLoadingTimeImpact] = useState<string | null>('');
  const [isNonThreeJsLoadingTimeImpact, setIsNonThreeJsLoadingTimeImpact] = useState<string | null>('');
  const [recommended3DSite, setRecommended3DSite] = useState<string | null>('');
  const [comparison, setComparison] = useState<string | null>('');
  const [isSuitableForChildren, setIsSuitableForChildren] = useState<string | null>('');
  const [extra, setExtra] = useState<string | null>('');
  const [aboutYou, setAboutYou] = useState<string | null>('');

  const roles = [
    {value: 'Teacher', label: 'Teacher'},
    {value: 'parents or guardians', label: 'parents or guardians'},
    {value: 'Student', label: 'Student'},
    {value: 'professor', label: 'professor'},
    {value: 'School administrator or principal', label: 'School administrator or principal'},
    {value: 'Education policy maker', label: 'Education policy maker'},
    {value: 'Education consultant or expert', label: 'Education consultant or experts'},
    {value: 'other', label: 'other'},
  ]
  const networkOptions = [
    {value: 'Sri Lanka Telecom', label: translate("SriLankaTelecom", language)},
    {value: 'Mobitel', label: translate("Mobitel", language)},
    {value: 'Dialog', label: translate("Dialog", language)},
    {value: 'Hutch', label: translate("Hutch", language)},
    {value: 'Airtel', label: translate("Airtel", language)},
    {value: 'Etisalat', label: translate("Etisalat", language)},
    {value: 'Lanka Bell', label: translate("LankaBell", language)},
  ];
  const networkTypes = [
    {value: 'Slow 3G', label: 'Slow 3G'},
    {value: 'Fast 3G', label: 'Fast 3G'},
    {value: 'Mobile 4G', label: 'Mobile 4G'},
    {value: '4G LTE (Wireless Router)', label: '4G LTE (Wireless Router)'},
    {value: 'ADSL (Asymmetric Digital Subscriber Line)', label: 'ADSL (Asymmetric Digital Subscriber Line)'},
    {value: 'Fiber optic internet', label: 'Fiber optic internet'},
    {value: '5G', label: '5G'},
  ]
  const ratingOptions = [
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
    {value: '4', label: '4'},
    {value: '5', label: '5'}
  ];
  const booleanOptions = [
    {value: 'yes', label: 'Yes'},
    {value: 'no', label: 'No'},
    {value: 'mayBe', label: 'May Be, Not sure'},
  ]
  const threeDType = [
    {value: 'ThreeJs powered', label: 'ThreeJs Powered'},
    {value: 'Non ThreeJs powered', label: 'Non ThreeJs Powered'},
    {value: 'both', label: 'both'},
  ]

  const resultObj = {
    cube1LoadTime,
    cube2LoadTime,
    Cylinder1LoadTime,
    Cylinder2LoadTime,
    pyramid1LoadTime,
    pyramid2LoadTime,
    sphere1LoadTime,
    sphere2LoadTime,
    role,
    serviceProvider,
    network,
    ratingForThreeJsPowered,
    ratingForNonThreeJsPowered,
    isThreeJsDelayed,
    isThreeJsNavigatable,
    isNonThreeJsNavigatable,
    isThreeJsLoadingTimeImpact,
    isNonThreeJsLoadingTimeImpact,
    recommended3DSite,
    comparison,
    isSuitableForChildren,
    extra,
    aboutYou
  }

  return (
    <div className="feedback-div">
      <div className="notice">
        <p>{translate("notice", language)}</p>
      </div>

      <div className="label">{translate("question1", language)}</div>
      <CreatableSelect isClearable options={roles}
                       onChange={(e: any) => setRole(e.value)}/>
      <div className="label">{translate("question2", language)}</div>
      <CreatableSelect isClearable options={networkOptions} onChange={(e: any) => setServiceProvider(e.value)}/>
      <div className="label">{translate("question3", language)}</div>
      <CreatableSelect isClearable options={networkTypes} onChange={(e: any) => setNetwork(e.value)}/>
      <div className="label">{translate("question4", language)}</div>
      <div className="wrapper-options">
        <span>ThreeJs Powered &nbsp;</span>
        <CreatableSelect className="non-full-width" isClearable options={ratingOptions}
                         onChange={(e: any) => setRatingForThreeJsPowered(e.value)}/>
      </div>
      <div className="wrapper-options">
        <span>Non ThreeJs Powered &nbsp;</span>
        <CreatableSelect className="non-full-width" isClearable options={ratingOptions}
                         onChange={(e: any) => setRatingForNonThreeJsPowered(e.value)}/>
      </div>
      <div className="label">{translate("question5", language)}</div>
      <CreatableSelect isClearable options={booleanOptions} onChange={(e: any) => setIsThreeJsDelayed(e.value)}/>
      <div className="label">{translate("question6", language)}</div>
      <div className="wrapper-options">
        <span>ThreeJs Powered &nbsp;</span>
        <CreatableSelect className="non-full-width" isClearable options={booleanOptions}
                         onChange={(e: any) => setIsThreeJsNavigatable(e.value)}/>
      </div>
      <div className="wrapper-options">
        <span>Non ThreeJs Powered &nbsp;</span>
        <CreatableSelect className="non-full-width" isClearable options={booleanOptions}
                         onChange={(e: any) => setIsNonThreeJsNavigatable(e.value)}/>
      </div>
      <div className="label">{translate("question8", language)}</div>
      <div className="wrapper-options">
        <span>ThreeJs Powered &nbsp;</span>
        <CreatableSelect className="non-full-width" isClearable options={booleanOptions}
                         onChange={(e: any) => setIsThreeJsLoadingTimeImpact(e.value)}/>
      </div>
      <div className="wrapper-options">
        <span>Non ThreeJs Powered &nbsp;</span>
        <CreatableSelect className="non-full-width" isClearable options={booleanOptions}
                         onChange={(e: any) => setIsNonThreeJsLoadingTimeImpact(e.value)}/>
      </div>
      <div className="label">{translate("question9", language)}</div>
      <CreatableSelect isClearable options={threeDType} onChange={(e: any) => setRecommended3DSite(e.value)}/>
      <div className="label">{translate("question10", language)}</div>
      <textarea rows={4} onChange={(e: any) => setComparison(e.target.value)}/>
      <div className="label">{translate("question11", language)}</div>
      <CreatableSelect isClearable options={booleanOptions} onChange={(e: any) => setIsSuitableForChildren(e.value)}/>
      <div className="label">{translate("question12", language)}</div>
      <textarea rows={4} onChange={(e: any) => setExtra(e.target.value)}/>
      <div className="label">{translate("question13", language)}</div>
      <textarea rows={5} onChange={(e: any) => setAboutYou(e.target.value)}/>

      <div className="text-align-center">
        <button disabled={isDisabled} className="feedback-btn" onClick={() => console.log(resultObj)}> Submit</button>
        {
          isDisabled &&
          <small>{translate("disabledError", language)}</small>
        }
      </div>

      <br/>
      <br/>
    </div>
  )
}
export default Home;
