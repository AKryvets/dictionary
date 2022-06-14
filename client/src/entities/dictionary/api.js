import { wretch } from '../app';

const create = (requestModel) =>
  wretch('dictionary/').post(requestModel).json();

const update = ({ id, requestModel }) =>
  wretch(`dictionary/${id}`).put(requestModel).json();

const deleteDictionary = ({ id }) => wretch(`dictionary/${id}`).delete().json();

const getAll = () => wretch('dictionary/').get().json();

const getById = (id) => wretch(`dictionary/${id}`).get().json();

const getAllWords = () => wretch('dictionary/words').get().json();

export const dictionaryApi = {
  create,
  getAll,
  getById,
  update,
  deleteDictionary,
  getAllWords,
};
