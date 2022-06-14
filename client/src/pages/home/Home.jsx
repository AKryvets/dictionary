import React, { memo, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { BaseLayout } from '../../packages/layout';
import { Card } from '../../packages/card';
import { NewCard } from '../../packages/new-card';

import { history } from '../../packages/utils';
import { PathNames } from '../../consts';

import { modalActions } from '../../packages/modal';

import { dictionarySelectors } from '../../entities/dictionary';

import { List, StartButton } from './styled';
import { CreateDictionaryModal, dictionaryModalName } from './add-dictionary';

export const Home = memo(() => {
  const dispatch = useDispatch();
  const dictionaries = useSelector(dictionarySelectors.getAllDictionaries);

  const onCardClick = useCallback((id) => {
    history.push({
      pathname: PathNames.dictionary.replace(':id', id),
    });
  }, []);

  const onStartQuestionnaireClick = useCallback((e, id) => {
    e.stopPropagation();

    history.push({
      pathname: PathNames.questionnaire.replace(':id', id),
    });
  }, []);

  const showCreateDictionaryModal = useCallback(() => {
    dispatch(
      modalActions.setModalIsOpen({ name: dictionaryModalName, isOpen: true })
    );
  }, []);

  return (
    <BaseLayout isLoading={false}>
      <List>
        {dictionaries.map(({ title, id }) => (
          <Card
            key={id}
            id={id}
            title={title}
            postfix={
              <StartButton onClick={(e) => onStartQuestionnaireClick(e, id)} size={32} />
            }
            onClick={onCardClick}
          />
        ))}

        <NewCard onClick={showCreateDictionaryModal} />
      </List>
      <CreateDictionaryModal />
    </BaseLayout>
  );
});
