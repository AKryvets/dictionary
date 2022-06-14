import wretch from 'wretch';

const languages = () => {
  const headers = {
    'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    'X-RapidAPI-Key': 'febb73610fmsh9bf638786efed33p12aec8jsnbe5d7f83b86f',
  };

  return wretch(
    'https://google-translate1.p.rapidapi.com/language/translate/v2/languages'
  )
    .headers(headers)
    .get()
    .json();
};

const translate = ({ target, source, inputValue }) => {
  const encodedParams = new URLSearchParams();
  encodedParams.append('q', inputValue);
  encodedParams.append('target', target);
  encodedParams.append('source', source);

  const headers = {
    'content-type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    'X-RapidAPI-Key': 'febb73610fmsh9bf638786efed33p12aec8jsnbe5d7f83b86f',
  };

  return wretch(
    'https://google-translate1.p.rapidapi.com/language/translate/v2'
  )
    .headers(headers)
    .post(encodedParams)
    .json();
};

export const translateApi = {
  translate,
  languages,
};
