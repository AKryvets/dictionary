import * as yup from 'yup';

export const authValidationSchema = yup.object({
  email: yup.string('Enter your email').email('Email is not valid').required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const registerValidationSchema = yup.object({
  email: yup.string('Enter your email').required('Email is required'),
  firstName: yup.string('Enter your name').required('Name is required'),
  lastName: yup
    .string('Enter your last name')
    .required('Last name is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});
