import { translateActions } from './store';
import { translateApi } from './api';

const initTranslation = () => async (dispatch) => {
  try {
    dispatch(translateActions.setIsReady(false));
    const response = await translateApi.languages();

    const languages = response.data.languages.map(({ language }) => ({
      label: language,
      value: language,
    }));

    dispatch(translateActions.setLanguages(languages));
  } catch (e) {
    console.error(e);
  } finally {
    dispatch(translateActions.setIsReady(true));
  }
};
const translate =
  ({ target, source, inputValue }) =>
  async (dispatch) => {
    try {
      dispatch(translateActions.setIsReady(false));
      const response = await translateApi.translate({
        target,
        source,
        inputValue,
      });

      const result = response?.data?.translations
        .map((t) => t.translatedText)
        .join(', ');

      dispatch(translateActions.setResult(result));
    } catch (e) {
      console.error(e);
    } finally {
      dispatch(translateActions.setIsReady(true));
    }
  };

export const translateService = {
  initTranslation,
  translate,
};
