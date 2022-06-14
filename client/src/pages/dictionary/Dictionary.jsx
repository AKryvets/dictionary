import React, { memo, useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router';

import { BaseLayout } from '../../packages/layout';

import { Card } from '../../packages/card';

import { NewCard } from '../../packages/new-card';

import { modalActions } from '../../packages/modal';

import {
  dictionarySelectors,
  dictionaryService,
} from '../../entities/dictionary';

import {
  ControlWrapper,
  DeleteButton,
  DeleteDictionaryButton,
  DeleteDictionaryButtonWrapper,
  Title,
  WordsList,
  WordsSection,
  Wrapper,
} from './styled';
import { AddWordModal, addWordModalName } from './add-word';
import { DictionaryForm } from './DictionaryForm';

export const Dictionary = memo(() => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isReady = useSelector(dictionarySelectors.getIsReady);
  const dictionary = useSelector(dictionarySelectors.getDictionary);

  useEffect(() => {
    dispatch(dictionaryService.init({ id }));
  }, [id]);

  const createWordModal = useCallback(() => {
    dispatch(
      modalActions.setModalIsOpen({ name: addWordModalName, isOpen: true })
    );
    dispatch(modalActions.setModalData({ name: addWordModalName, data: null }));
  }, [dispatch]);

  const updateWordModal = useCallback(
    (wordId) => {
      dispatch(
        modalActions.setModalIsOpen({ name: addWordModalName, isOpen: true })
      );
      dispatch(
        modalActions.setModalData({ name: addWordModalName, data: wordId })
      );
    },
    [dispatch, id]
  );

  const deleteWord = useCallback(
    (e, selectedWordId) => {
      e.stopPropagation();

      const updatedWords = dictionary?.words.filter(
        (item, wordId) => wordId !== selectedWordId
      );

      dispatch(
        dictionaryService.update({ id, model: { words: updatedWords } })
      );
    },
    [dispatch, dictionary]
  );

  const deleteDictionary = useCallback(() => {
    dispatch(dictionaryService.deleteDictionary({ id }));
  }, [id]);

  return (
    <BaseLayout isLoading={!isReady}>
      <Wrapper>
        <ControlWrapper>
          <DictionaryForm id={id} />

          <DeleteDictionaryButtonWrapper onClick={deleteDictionary}>
            <DeleteDictionaryButton />
            Delete category
          </DeleteDictionaryButtonWrapper>
        </ControlWrapper>

        <WordsSection>
          <Title>Words:</Title>
          <WordsList>
            {dictionary?.words.map(({ origin, translation }, wordId) => (
              <Card
                key={wordId}
                id={wordId}
                title={`${origin}/${translation}`}
                onClick={updateWordModal}
                postfix={
                  <DeleteButton onClick={(e) => deleteWord(e, wordId)} />
                }
              />
            ))}
            <NewCard onClick={createWordModal} />
          </WordsList>
        </WordsSection>
      </Wrapper>
      <AddWordModal />
    </BaseLayout>
  );
});
