import React, { memo, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../packages/button';
import { Form } from '../../packages/form';

import {
  dictionarySelectors,
  dictionaryService,
} from '../../entities/dictionary';

import { FormWrapper, InputField } from './styled';
import { dictionaryNameValidationSchema } from './validate';

export const DictionaryForm = memo(({ id }) => {
  const dispatch = useDispatch();
  const dictionary = useSelector(dictionarySelectors.getDictionary);
  const isLoading = false;

  const initialValues = {
    title: id ? dictionary?.title : '',
  };

  const onSubmit = useCallback(
    (values) => {
      if (id) {
        dispatch(dictionaryService.update({ model: values, id }));
      } else {
        dispatch(dictionaryService.create(values));
      }
    },
    [dispatch, id]
  );

  return (
    <FormWrapper>
      <Form
        validationSchema={dictionaryNameValidationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
        isLoading={isLoading}
      >
        <InputField name="title" label="Dictionary name" />
        <Button variant="contained" size="medium" type="submit">
          Save
        </Button>
      </Form>
    </FormWrapper>
  );
});
