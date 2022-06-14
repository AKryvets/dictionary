import React, { memo } from 'react';

import { Modal } from '../../../packages/modal';

import { DictionaryForm } from '../../dictionary/DictionaryForm';

import { dictionaryModalName } from './consts';
import { Wrapper } from './styled';

export const CreateDictionaryModal = memo(() => (
  <Modal name={dictionaryModalName} header="Create dictionary">
    <Wrapper>
      <DictionaryForm />
    </Wrapper>
  </Modal>
));
