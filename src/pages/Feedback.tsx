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
    {value: 'School Teacher', label: 'School Teacher'},
    {value: 'tuition Teacher', label: 'tuition Teacher'},
    {value: 'parent', label: 'parent'},
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

  const aboutPlaceHolder = role === 'School Teacher'
    ? "Eg: \nI'm Nalinda Samansiri, and I work as a math teacher at Mahinda College Galle."
    : "Eg: \nI'm Nalinda Samansiri, and I work as an IT lecturer at ESOFT Metro Campus, Galle."

  console.log(document.cookie);
  console.log(navigator.geolocation);
  console.log(window.history);
  console.log(navigator.geolocation);
  let os = navigator.platform;
  console.log(os); // e.g. "Windows", "MacIntel", "Linux armv7l", etc.
  let browser = navigator.userAgent;
  console.log(browser); // e.g. "Mozilla/5.0 (Windows NT 10.0; Win64; x64)
  // @ts-ignore
  // let info = platform.parse(navigator.userAgent);
  // console.log(info.name); // e.g. "Chrome"
  // console.log(info.version); // e.g. "91.0.4472.124"
  // console.log(info.os); // e.g. "Windows 10"
  let screenWidth = window.screen.width;
  let screenHeight = window.screen.height;
  console.log(screenWidth + " x " + screenHeight); // e.g. "1920 x 1080"
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

  console.log("Operating System: " + OSName);
  console.log("Operating System Version: " + OSVersion);
  console.log("Browser: " + userBrowser);
  console.log("Device Type: " + deviceType);
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
      <div className="label">{translate("question13", language)} (Optional)</div>
      <textarea rows={5} onChange={(e: any) => setAboutYou(e.target.value)} placeholder={aboutPlaceHolder}/>

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
