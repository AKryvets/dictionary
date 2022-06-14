import * as yup from 'yup';

export const wordValidationSchema = yup.object({
  origin: yup.string('Enter word').required('Word name is required'),
  translation: yup
    .string('Enter translation')
    .required('Translation name is required'),
});
