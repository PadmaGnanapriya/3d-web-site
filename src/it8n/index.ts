import en from './en.json'
import si from './si.json'
import tm from './tm.json'

export const translate = (key: string, language: string): string => {
  let langData: { [key: string]: string } = {};

  if (language === 'EN') {
    langData = en;
  } else if (language === 'SI') {
    langData = si;
  } else if (language === 'TM') {
    langData = tm;
  }
  return langData[key];
}
