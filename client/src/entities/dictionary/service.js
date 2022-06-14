import { NotificationManager } from 'react-notifications';

import { modalActions } from '../../packages/modal';

import { dictionaryModalName } from '../../pages/home/add-dictionary';

import { history } from '../../packages/utils';

import { PathNames } from '../../consts';

import { addWordModalName } from '../../pages/dictionary/add-word';

import { dictionaryApi } from './api';
import { dictionaryActions } from './store';

const init =
  ({ id }) =>
  async (dispatch) => {
    try {
      dispatch(dictionaryActions.setIsReady(false));

      await dispatch(getDictionary(id));
    } catch (e) {
      console.error(e);
    } finally {
      dispatch(dictionaryActions.setIsReady(true));
    }
  };

const getAllDictionaries = () => async (dispatch) => {
  try {
    const dictionaries = await dictionaryApi.getAll();

    dispatch(dictionaryActions.setAllDictionary(dictionaries));
  } catch (e) {
    console.error(e);
  }
};

const getDictionary = (id) => async (dispatch) => {
  try {
    const dictionary = await dictionaryApi.getById(id);

    dispatch(dictionaryActions.setDictionary(dictionary));
  } catch (e) {
    console.error(e);
  }
};

const getAllWords = () => async (dispatch) => {
  try {
    const words = await dictionaryApi.getAllWords();

    dispatch(dictionaryActions.setAllWords(words));
  } catch (e) {
    console.error(e);
  }
};

const create = (model) => async (dispatch) => {
  try {
    await dictionaryApi.create(model);

    dispatch(getAllDictionaries());

    dispatch(
      modalActions.setModalIsOpen({ name: dictionaryModalName, isOpen: false })
    );

    NotificationManager.success('Successfully created');
  } catch (e) {
    console.error(e);
  }
};

const update =
  ({ id, model }) =>
  async (dispatch) => {
    try {
      await dictionaryApi.update({ requestModel: model, id });

      await dispatch(getDictionary(id));
      dispatch(getAllDictionaries());

      NotificationManager.success('Successfully updated');

      dispatch(
        modalActions.setModalIsOpen({ name: addWordModalName, isOpen: false })
      );
    } catch (e) {
      console.error(e);
    }
  };

const deleteDictionary = (model) => async (dispatch) => {
  try {
    await dictionaryApi.deleteDictionary(model);

    await dispatch(getAllDictionaries());
    history.push({ pathname: PathNames.home });
  } catch (e) {
    console.error(e);
  }
};

export const dictionaryService = {
  init,
  create,
  update,
  getAllWords,
  deleteDictionary,
  getAllDictionaries,
};
