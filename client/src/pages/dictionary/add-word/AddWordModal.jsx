import React, { memo } from 'react';

import { useSelector } from 'react-redux';

import { Modal, modalSelectors } from '../../../packages/modal';

import { dictionarySelectors } from '../../../entities/dictionary';

import { addWordModalName } from './consts';
import { AddWordForm } from './AddWordForm';

export const AddWordModal = memo(() => {
  const dictionary = useSelector(dictionarySelectors.getDictionary);
  const wordId = useSelector((state) =>
    modalSelectors.getModalData(state, addWordModalName)
  );

  return (
    <Modal
      name={addWordModalName}
      header={wordId ? 'Edit dictionary item' : 'Add dictionary item'}
      styles={{ width: '500px' }}
    >
      <AddWordForm
        wordId={wordId}
        id={dictionary.id}
        words={dictionary.words}
      />
    </Modal>
  );
});
