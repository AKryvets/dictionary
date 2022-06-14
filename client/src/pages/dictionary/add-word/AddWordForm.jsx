import React, { memo, useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { InputField } from '../styled';
import { Form } from '../../../packages/form';
import { Button } from '../../../packages/button';

import { dictionaryService } from '../../../entities/dictionary';

import { Wrapper } from './styled';
import { wordValidationSchema } from './validate';

export const AddWordForm = memo(({ words, id, wordId }) => {
  const dispatch = useDispatch();
  const word = words[wordId];

  const initialValues = {
    origin: word?.origin ?? '',
    translation: word?.translation ?? '',
  };

  const addWord = useCallback(
    (values) => {
      dispatch(
        dictionaryService.update({ id, model: { words: [...words, values] } })
      );
    },
    [words, id]
  );

  const updateWord = useCallback(
    (values) => {
      const updatedWords = words.map((item, id) =>
        id === wordId ? values : item
      );

      dispatch(
        dictionaryService.update({ id, model: { words: updatedWords } })
      );
    },
    [words, id, wordId]
  );

  return (
    <Wrapper>
      <Form
        validationSchema={wordValidationSchema}
        initialValues={initialValues}
        onSubmit={wordId ? updateWord : addWord}
        isLoading={false}
      >
        <InputField name="origin" label="Origin" />
        <InputField name="translation" label="Translation" />
        <Button variant="contained" size="medium" type="submit">
          {wordId ? 'Edit' : 'Add'}
        </Button>
      </Form>
    </Wrapper>
  );
});
