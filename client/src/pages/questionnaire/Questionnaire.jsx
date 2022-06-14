import React, { memo, useCallback, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router';

import { NotificationManager } from 'react-notifications';

import { node } from 'prop-types';

import { BaseLayout } from '../../packages/layout';

import {
  dictionarySelectors,
  dictionaryService,
} from '../../entities/dictionary';

import { history } from '../../packages/utils';
import { PathNames } from '../../consts';

import {
  BackToHome,
  Content,
  ContinueButton,
  HelpMessage,
  InputField,
  Line,
  Question,
  Wrapper,
} from './styled';
import { shuffle } from './utils';

export const Questionnaire = memo(() => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [isFinished, setIsFinished] = useState(false);

  const [answer, setAnswer] = useState('');
  const [failsCount, setFailsCount] = useState(0);

  const [words, setWords] = useState([]);
  const [completedWords, setCompletedWords] = useState([]);

  const [currentWord, setCurrentWord] = useState();

  const isReady = useSelector(dictionarySelectors.getIsReady);
  const dictionary = useSelector(dictionarySelectors.getDictionary);

  useEffect(() => {
    dispatch(dictionaryService.init({ id }));
  }, [id]);

  useEffect(() => {
    if (dictionary?.words) {
      const shuffledArray = shuffle([...dictionary.words]);
      setWords(shuffledArray);
      setCurrentWord(shuffledArray[0]);
    }
  }, [dictionary]);

  const onAnswerChange = useCallback((e) => {
    setAnswer(e.target.value);
  }, []);

  const goToHome = useCallback(() => {
    history.push({
      pathname: PathNames.home,
    });
  }, []);

  const onContinueClick = useCallback(() => {
    const [firstWord, ...rest] = [...words];

    if (
      answer.toLowerCase().trim() ===
      currentWord.translation.toLowerCase().trim()
    ) {
      setCompletedWords([...completedWords, currentWord]);
      setAnswer('');
      setCurrentWord('');

      setWords([...rest]);
      setCurrentWord(rest[0]);
      NotificationManager.success('Correct');

      if (!rest.length) setIsFinished(true);
    } else {
      setWords([...rest, firstWord]);
      setCurrentWord(rest[0]);
      setAnswer('');
      setFailsCount(failsCount + 1);

      NotificationManager.error(
        `Failure. Right answer: ${currentWord.translation}`
      );
    }
  }, [currentWord, answer, completedWords, setCurrentWord, failsCount]);

  return (
    <BaseLayout isLoading={!isReady}>
      <Wrapper>
        {words.length ? (
          <>
            <HelpMessage>Please, translate the word:</HelpMessage>
            <Content>
              <Question>{currentWord.origin}</Question>
              <Line />
              <InputField
                placeholder="Answer"
                value={answer}
                onChange={onAnswerChange}
              />
            </Content>
            <ContinueButton onClick={onContinueClick}>Continue</ContinueButton>
          </>
        ) : isFinished ? (
          <>
            <Content>
              <Question>
                Amazing, you successfully translated all words
              </Question>
              <Question>Number of mistakes: {failsCount}</Question>
              <Line />
              <BackToHome onClick={goToHome}>Back to home</BackToHome>
            </Content>
          </>
        ) : (
          <HelpMessage>Sorry, this dictionary does`t have words</HelpMessage>
        )}
      </Wrapper>
    </BaseLayout>
  );
});
