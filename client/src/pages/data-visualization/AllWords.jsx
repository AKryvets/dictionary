import React, { memo } from 'react';

import { useSelector } from 'react-redux';

import { Card } from '../../packages/card';
import { dictionarySelectors } from '../../entities/dictionary';

import { WordsList } from '../dictionary/styled';

import { Wrapper } from './styled';

export const AllWords = memo(() => {
  const allWords = useSelector(dictionarySelectors.getAllWords);

  return (
    <Wrapper>
      <WordsList>
        {allWords.map(({ origin, translation }, wordId) => (
          <Card key={wordId} id={wordId} title={`${origin}/${translation}`} />
        ))}
      </WordsList>
    </Wrapper>
  );
});
