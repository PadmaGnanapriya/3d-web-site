import React, {useEffect, useState} from "react";
import {translate} from "../it8n";
import CreatableSelect from 'react-select/creatable';
import "./feedback.scss";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom';

type propType = {
  language: string;
}

const Home: React.FC<propType> = (props) => {
  const navigate = useNavigate();

  const {language} = props;
  const cube1LoadTime = sessionStorage.getItem('Cube1');
  const cube2LoadTime = sessionStorage.getItem('Cube2');
  const Cylinder1LoadTime = sessionStorage.getItem('Cylinder1');
  const Cylinder2LoadTime = sessionStorage.getItem('Cylinder2');
  const pyramid1LoadTime = sessionStorage.getItem('Pyramid1');
  const pyramid2LoadTime = sessionStorage.getItem('Pyramid2');
  const sphere1LoadTime = sessionStorage.getItem('Sphere1');
  const sphere2LoadTime = sessionStorage.getItem('Sphere2');
  const christmasTree1LoadTime = sessionStorage.getItem('ChristmasTree1');
  const christmasTree2LoadTime = sessionStorage.getItem('ChristmasTree2');

  const isDisabled = !(cube1LoadTime && cube2LoadTime && Cylinder1LoadTime && Cylinder2LoadTime &&
    pyramid1LoadTime && pyramid2LoadTime && sphere1LoadTime && sphere2LoadTime && christmasTree1LoadTime && christmasTree2LoadTime)

  const [submitting, setSubmitting] = useState(false);
  const [validating, setValidating] = useState(false);
  const [ip, setIP] = useState('');
  const [role, setRole] = useState<string | null>('');
  const [network, setNetwork] = useState<string | null>('');
  const [ratingForThreeJsPowered, setRatingForThreeJsPowered] = useState<string | null>('');
  const [ratingForNonThreeJsPowered, setRatingForNonThreeJsPowered] = useState<string | null>('');
  const [isThreeJsDelayed, setIsThreeJsDelayed] = useState<string | null>('');
  const [isThreeJsNavigable, setIsThreeJsNavigable] = useState<string | null>('');
  const [isNonThreeJsNavigable, setIsNonThreeJsNavigable] = useState<string | null>('');
  const [isThreeJsLoadingTimeImpact, setIsThreeJsLoadingTimeImpact] = useState<string | null>('');
  const [isNonThreeJsLoadingTimeImpact, setIsNonThreeJsLoadingTimeImpact] = useState<string | null>('');
  const [recommended3DSite, setRecommended3DSite] = useState<string | null>('');
  const [comparison, setComparison] = useState<string | null>('');
  const [isSuitableForChildren, setIsSuitableForChildren] = useState<string | null>('');
  const [extra, setExtra] = useState<string | null>('');
  const [aboutYou, setAboutYou] = useState<string | null>('');

  const roles = [
    {value: 'School Teacher', label: translate('SchoolTeacher', language)},
    {value: 'tuition Teacher', label: translate('tuitionTeacher', language)},
    {value: 'parent', label: translate('parent', language)},
    {value: 'Student', label: translate('Student', language)},
    {value: 'professor', label: translate('professor', language)},
    {value: 'School administrator or principal', label: translate('SchoolAdministrator', language)},
    {value: 'Education policy maker', label: translate('EducationPolicyMaker', language)},
    {value: 'Education consultant or expert', label: translate('EducationConsultant', language)},
    {value: 'software Engineer', label: translate('softwareEngineer', language)},
    {value: 'other', label: translate('other', language)},
  ]
  // const networkOptions = [
  //   {value: 'Sri Lanka Telecom', label: translate("SriLankaTelecom", language)},
  //   {value: 'Mobitel', label: translate("Mobitel", language)},
  //   {value: 'Dialog', label: translate("Dialog", language)},
  //   {value: 'Hutch', label: translate("Hutch", language)},
  //   {value: 'Airtel', label: translate("Airtel", language)},
  //   {value: 'Etisalat', label: translate("Etisalat", language)},
  //   {value: 'Lanka Bell', label: translate("LankaBell", language)},
  // ];
  const networkTypes = [
    {value: '5G', label: '5G'},
    {value: 'Fiber', label: 'Fiber optic internet'},
    {value: '4G LTE', label: '4G LTE (Wireless Router)'},
    {value: 'ADSL', label: 'ADSL (Asymmetric Digital Subscriber Line)'},
    {value: 'Mobile 4G', label: 'Mobile 4G'},
    {value: 'Fast 3G', label: 'Fast 3G'},
    {value: 'Slow 3G', label: 'Slow 3G'},
  ]
  const ratingOptions = [
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
    {value: '4', label: '4'},
    {value: '5', label: '5'}
  ];
  const booleanOptions = [
    {value: 'yes', label: translate("yes", language)},
    {value: 'no', label: translate("no", language)},
  ]
  // {value: 'mayBe', label: translate("mayBe", language)},

  const threeDType = [
    {value: 'ThreeJs powered', label: 'ThreeJs Powered'},
    {value: 'Non ThreeJs powered', label: 'Non ThreeJs Powered'},
    {value: 'both', label: 'both'},
  ]

  const aboutPlaceHolder = role === 'School Teacher'
    ? "Eg: \nI'm Nalinda Samansiri, and I work as a maths teacher at Mahinda College Galle."
    : "Eg: \nI'm Nalinda Samansiri, and I work as an IT lecturer at ESOFT Metro Campus, Galle."

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    setIP(res.data)
  }

  useEffect(() => {
    getData().then(() => console.log(''));
  }, [])

  const userAgent = navigator.userAgent;
  let deviceType = "Other"
  let OSName = "Unknown OS";
  let OSVersion = "Unknown OS Version";
  let userBrowser = "Unknown Browser";

  if (userAgent.match(/Android/i)) {
    deviceType = "Android phone or tablet";
    if (userAgent.match(/Mobile/i)) {
      deviceType = "Android phone";
    } else {
      deviceType = "Android tablet";
    }
  } else if (userAgent.match(/iPhone/i)) {
    deviceType = "iPhone";
  } else if (userAgent.match(/iPad/i)) {
    deviceType = "iPad";
  } else if (userAgent.match(/Windows Phone/i)) {
    deviceType = "Windows Phone";
  } else if (userAgent.match(/Windows NT/i) && userAgent.match(/Tablet PC/i)) {
    deviceType = "Windows tablet";
  } else if (userAgent.match(/Macintosh/i) && userAgent.match(/Intel/i)) {
    deviceType = "Mac desktop or laptop";
  } else if (userAgent.match(/Linux/i) && userAgent.match(/Android/i)) {
    deviceType = "Android tablet";
  } else if (userAgent.match(/Linux/i) && userAgent.match(/KFAPWI/i)) {
    deviceType = "Amazon Kindle Fire";
  } else if (userAgent.match(/RIM Tablet/i) || userAgent.match(/PlayBook/i)) {
    deviceType = "BlackBerry PlayBook";
  } else if (userAgent.match(/BB10/i)) {
    deviceType = "BlackBerry 10 phone or tablet";
  } else if (userAgent.match(/webOS/i)) {
    deviceType = "HP TouchPad";
  } else if (userAgent.match(/Kindle/i)) {
    deviceType = "Amazon Kindle";
  } else if (userAgent.match(/Silk/i)) {
    deviceType = "Amazon Kindle Fire";
  } else if (userAgent.match(/Nexus/i)) {
    deviceType = "Google Nexus phone or tablet";
  } else if (userAgent.match(/Xoom/i)) {
    deviceType = "Motorola Xoom tablet";
  } else if (userAgent.match(/Windows NT/i)) {
    deviceType = "Windows laptop or Desktop";
  }

// Detect Browser
  if (userAgent.indexOf("Edg") > -1) {
    userBrowser = "Microsoft Edge";
  } else if (userAgent.indexOf("Chrome") > -1) {
    userBrowser = "Chrome";
  } else if (userAgent.indexOf("Firefox") > -1) {
    userBrowser = "Firefox";
  } else if (userAgent.indexOf("Safari") > -1) {
    userBrowser = "Safari";
  } else if (userAgent.indexOf("Trident") > -1) {
    userBrowser = "Microsoft Internet Explorer";
  } else if (userAgent.indexOf("Opera") > -1) {
    userBrowser = "Opera";
  }

// Detect Windows OS
  if (userAgent.indexOf("Win") !== -1) {
    OSName = "Windows";
    if (userAgent.indexOf("Windows NT 10.0") !== -1) {
      OSVersion = "Windows 10";
    } else if (userAgent.indexOf("Windows NT 6.3") !== -1) {
      OSVersion = "Windows 8.1";
    } else if (userAgent.indexOf("Windows NT 6.2") !== -1) {
      OSVersion = "Windows 8";
    } else if (userAgent.indexOf("Windows NT 6.1") !== -1) {
      OSVersion = "Windows 7";
    } else if (userAgent.indexOf("Windows NT 6.0") !== -1) {
      OSVersion = "Windows Vista";
    } else if (userAgent.indexOf("Windows NT 5.1") !== -1) {
      OSVersion = "Windows XP";
    } else if (userAgent.indexOf("Windows NT 5.0") !== -1) {
      OSVersion = "Windows 2000";
    }
  }
// Detect macOS
  else if (userAgent.indexOf("Mac") !== -1) {
    OSName = "Mac OS";
    if (userAgent.indexOf("Mac OS X 10.15") !== -1) {
      OSVersion = "Catalina";
    } else if (userAgent.indexOf("Mac OS X 10.14") !== -1) {
      OSVersion = "Mojave";
    } else if (userAgent.indexOf("Mac OS X 10.13") !== -1) {
      OSVersion = "High Sierra";
    } else if (userAgent.indexOf("Mac OS X 10.12") !== -1) {
      OSVersion = "Sierra";
    } else if (userAgent.indexOf("Mac OS X 10.11") !== -1) {
      OSVersion = "El Capitan";
    } else if (userAgent.indexOf("Mac OS X 10.10") !== -1) {
      OSVersion = "Yosemite";
    }
  }
// Detect Linux OS
  else if (userAgent.indexOf("Linux") !== -1) {
    OSName = "Linux";
    if (userAgent.indexOf("Ubuntu") !== -1) {
      OSVersion = "Ubuntu";
    } else if (userAgent.indexOf("Fedora") !== -1) {
      OSVersion = "Fedora";
    } else if (userAgent.indexOf("Debian") !== -1) {
      OSVersion = "Debian";
    } else if (userAgent.indexOf("Mint") !== -1) {
      OSVersion = "Mint";
    }
  }

  const onSubmitForm = async () => {
    setValidating(true);
    setSubmitting(true);
    if (
      role === '' ||
      network === '' ||
      ratingForThreeJsPowered === '' ||
      ratingForNonThreeJsPowered === '' ||
      isThreeJsDelayed === '' ||
      isThreeJsNavigable === '' ||
      isNonThreeJsNavigable === '' ||
      isThreeJsLoadingTimeImpact === '' ||
      isNonThreeJsLoadingTimeImpact === '' ||
      recommended3DSite === '' ||
      comparison === '' ||
      isSuitableForChildren === ''
    ) {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      setSubmitting(false);
      return
    }
    const formData = new FormData();
    formData.append("cube1LoadTime", (cube1LoadTime || '').toString());
    formData.append("cube2LoadTime", (cube2LoadTime || '').toString());
    formData.append("Cylinder1LoadTime", (Cylinder1LoadTime || '').toString());
    formData.append("Cylinder2LoadTime", (Cylinder2LoadTime || '').toString());
    formData.append("pyramid1LoadTime", (pyramid1LoadTime || '').toString());
    formData.append("pyramid2LoadTime", (pyramid2LoadTime || '').toString());
    formData.append("sphere1LoadTime", (sphere1LoadTime || '').toString());
    formData.append("sphere2LoadTime", (sphere2LoadTime || '').toString());
    formData.append("christmasTree1LoadTime", (christmasTree1LoadTime || '').toString());
    formData.append("christmasTree2LoadTime", (christmasTree2LoadTime || '').toString());
    formData.append("ip", JSON.stringify(ip) || '');
    formData.append("OSName", OSName || '');
    formData.append("OSVersion", OSVersion || '');
    formData.append("userBrowser", userBrowser || '');
    formData.append("deviceType", deviceType || '');
    formData.append("screen", JSON.stringify({w: window.screen.width, h: window.screen.height}) || '');
    formData.append("maxTouchPoints", navigator.maxTouchPoints.toString() || '');
    formData.append("cores", navigator.hardwareConcurrency.toString() || '');
    formData.append("role", role || '');
    formData.append("network", (network || '').toString());
    formData.append("ratingForThreeJsPowered", ratingForThreeJsPowered || '');
    formData.append("ratingForNonThreeJsPowered", ratingForNonThreeJsPowered || '');
    formData.append("isThreeJsDelayed", isThreeJsDelayed || '');
    formData.append("isThreeJsNavigable", isThreeJsNavigable || '');
    formData.append("isNonThreeJsNavigable", isNonThreeJsNavigable || '');
    formData.append("isThreeJsLoadingTimeImpact", isThreeJsLoadingTimeImpact || '');
    formData.append("isNonThreeJsLoadingTimeImpact", isNonThreeJsLoadingTimeImpact || '');
    formData.append("recommended3DSite", recommended3DSite || '');
    formData.append("comparison", comparison || '');
    formData.append("isSuitableForChildren", isSuitableForChildren || '');
    formData.append("extra", extra || '');
    formData.append("aboutYou", aboutYou || '');

    axios.post('https://script.google.com/macros/s/AKfycbyFvoqAcLY9eVU1ZffL7P8dmt_HtroHgwzVawHu2VzqaQMNuyO_nhynsySIvpaHFA/exec', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(() => setSubmitting(true)).finally(() => navigate("/thank-you"))
  }

  return (
    <div className="feedback-div">
      <div className="notice">
        <p>{translate("notice", language)}</p>
      </div>

      <div className="label">{translate("question1", language)}</div>
      <CreatableSelect isClearable options={roles} className={validating && role === '' ? "invalid-input" : ""}
                       onChange={(e: any) => setRole(e.value)}/>
      {/*<div className="label">{translate("question2", language)}</div>*/}
      {/*<CreatableSelect isClearable options={networkOptions} onChange={(e: any) => setServiceProvider(e.value)}/>*/}
      <div className="label">{translate("question3", language)}</div>
      <CreatableSelect className={validating && network === '' ? "invalid-input" : ""} isClearable
                       options={networkTypes} onChange={(e: any) => setNetwork(e.value)}/>
      <div className="label">{translate("question4", language)}</div>
      <div className="wrapper-options">
        <span>ThreeJs Powered &nbsp;</span>
        <CreatableSelect
          className={validating && ratingForThreeJsPowered === '' ? "invalid-input non-full-width" : "non-full-width"}
          isClearable options={ratingOptions}
          onChange={(e: any) => setRatingForThreeJsPowered(e.value)}/>
      </div>
      <div className="wrapper-options">
        <span>Non ThreeJs Powered &nbsp;</span>
        <CreatableSelect
          className={validating && ratingForNonThreeJsPowered === '' ? "invalid-input non-full-width" : "non-full-width"}
          isClearable options={ratingOptions}
          onChange={(e: any) => setRatingForNonThreeJsPowered(e.value)}/>
      </div>
      <div className="label">{translate("question5", language)}</div>
      <CreatableSelect className={validating && isThreeJsDelayed === '' ? "invalid-input" : ""} isClearable
                       options={booleanOptions} onChange={(e: any) => setIsThreeJsDelayed(e.value)}/>
      <div className="label">{translate("question6", language)}</div>
      <div className="wrapper-options">
        <span>ThreeJs Powered &nbsp;</span>
        <CreatableSelect
          className={validating && isThreeJsNavigable === '' ? "invalid-input non-full-width" : "non-full-width"}
          isClearable options={booleanOptions}
          onChange={(e: any) => setIsThreeJsNavigable(e.value)}/>
      </div>
      <div className="wrapper-options">
        <span>Non ThreeJs Powered &nbsp;</span>
        <CreatableSelect
          className={validating && isNonThreeJsNavigable === '' ? "invalid-input non-full-width" : "non-full-width"}
          isClearable options={booleanOptions}
          onChange={(e: any) => setIsNonThreeJsNavigable(e.value)}/>
      </div>
      <div className="label">{translate("question8", language)}</div>
      <div className="wrapper-options">
        <span>ThreeJs Powered &nbsp;</span>
        <CreatableSelect
          className={validating && isThreeJsLoadingTimeImpact === '' ? "invalid-input non-full-width" : "non-full-width"}
          isClearable options={booleanOptions}
          onChange={(e: any) => setIsThreeJsLoadingTimeImpact(e.value)}/>
      </div>
      <div className="wrapper-options">
        <span>Non ThreeJs Powered &nbsp;</span>
        <CreatableSelect
          className={validating && isNonThreeJsLoadingTimeImpact === '' ? "invalid-input non-full-width" : "non-full-width"}
          isClearable options={booleanOptions}
          onChange={(e: any) => setIsNonThreeJsLoadingTimeImpact(e.value)}/>
      </div>
      <div className="label">{translate("question9", language)}</div>
      <CreatableSelect className={validating && recommended3DSite === '' ? "invalid-input" : ""} isClearable
                       options={threeDType} onChange={(e: any) => setRecommended3DSite(e.value)}/>
      <div className="label">{translate("question10", language)}</div>
      {language !== 'EN' && <small>( Please provide your answer in English, if possible. )</small>}
      <textarea className={validating && comparison === '' ? "invalid-input" : ""} rows={4}
                onChange={(e: any) => setComparison(e.target.value)}/>
      <div className="label">{translate("question11", language)}</div>
      <CreatableSelect className={validating && isSuitableForChildren === '' ? "invalid-input" : ""} isClearable
                       options={booleanOptions} onChange={(e: any) => setIsSuitableForChildren(e.value)}/>
      <div className="label">{translate("question12", language)}</div>
      {language !== 'EN' && <small>( Please provide your answer in English, if possible. )</small>}
      <textarea rows={4} onChange={(e: any) => setExtra(e.target.value)}/>
      <div className="label">{translate("question13", language)} (Optional)</div>
      {language !== 'EN' && <small>( Please provide your answer in English, if possible. )</small>}
      <textarea rows={5} onChange={(e: any) => setAboutYou(e.target.value)} placeholder={aboutPlaceHolder}/>

      <div className="text-align-center">
        <button disabled={isDisabled || submitting} className="feedback-btn" onClick={onSubmitForm}> Submit</button>
        {
          isDisabled &&
            <small>{translate("disabledError", language)}<br/>
              {cube1LoadTime === null ? <><Link to="../cube">{translate("cube", language)} 1,</Link>&nbsp;</> : ''}
              {cube2LoadTime === null ? <><Link to="../cube-2">{translate("cube", language)} 2,</Link>&nbsp;</> : ''}
              {Cylinder1LoadTime === null ? <><Link
                to="../cylinder">{translate("cylinder", language)} 1,</Link>&nbsp;</> : ''}
              {Cylinder2LoadTime === null ? <><Link
                to="../cylinder-2">{translate("cylinder", language)} 2,</Link>&nbsp;</> : ''}
              {pyramid1LoadTime === null ? <><Link
                to="../pyramid">{translate("pyramid", language)} 1,</Link>&nbsp;</> : ''}
              {pyramid2LoadTime === null ? <><Link
                to="../pyramid-2">{translate("pyramid", language)} 2,</Link>&nbsp;</> : ''}
              {sphere1LoadTime === null ? <><Link
                to="../sphere">{translate("sphere", language)} 1,</Link>&nbsp;</> : ''}
              {sphere2LoadTime === null ? <><Link
                to="../sphere-2">{translate("sphere", language)} 2,</Link>&nbsp;</> : ''}
              {christmasTree1LoadTime === null ? <><Link to="../christmas-tree-1">{translate("christmasTree", language)} 1,</Link>&nbsp;</> : ''}
              {christmasTree2LoadTime === null ? <><Link to="../christmas-tree-2">{translate("christmasTree", language)} 2,</Link>&nbsp;</> : ''}
            </small>
        }
      </div>

      <br/>
      <br/>
    </div>
  )
}
export default Home;
