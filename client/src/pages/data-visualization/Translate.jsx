import React, { memo, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  translateSelectors,
  translateService,
} from '../../entities/translation';
import { Select } from '../../packages/select';

import { Button } from '../../packages/button';

import {
  Language,
  Languages,
  Textarea,
  TranslateLabel,
  TranslateResult,
  Wrapper,
} from './styled';

export const Translate = memo(() => {
  const dispatch = useDispatch();
  const { languages, result } = useSelector(
    translateSelectors.getTranslateData
  );
  const [target, setTarget] = useState();
  const [source, setSource] = useState();
  const [sourceValue, setSourceValue] = useState();

  const onTranslate = () => {
    dispatch(
      translateService.translate({ target, source, inputValue: sourceValue })
    );
  };

  useEffect(() => {
    dispatch(translateService.initTranslation());
  }, []);

  return (
    <Wrapper>
      <Languages>
        <Language>
          <Select
            options={languages}
            sx={{ minWidth: 200 }}
            label="Source language"
            onChange={(e) => {
              setSource(e.target.value);
            }}
          />
        </Language>
        <Language>
          <Select
            options={languages}
            sx={{ minWidth: 200 }}
            label="Target language"
            onChange={(e) => {
              setTarget(e.target.value);
            }}
          />
        </Language>
      </Languages>
      <Textarea
        value={sourceValue}
        onChange={(e) => setSourceValue(e.target.value)}
      />
      <Button
        variant="contained"
        size="medium"
        onClick={onTranslate}
        sx={{ width: 100 }}
      >
        Translate
      </Button>
      <TranslateLabel>Translation:</TranslateLabel>
      <TranslateResult>{result}</TranslateResult>
    </Wrapper>
  );
});
