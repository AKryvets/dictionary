import * as yup from 'yup';

export const dictionaryNameValidationSchema = yup.object({
  title: yup.string('Enter dictionary name').required('Dictionary name is required'),
});
