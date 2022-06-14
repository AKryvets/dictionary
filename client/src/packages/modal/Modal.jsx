import React, { useCallback } from 'react';
import { Box, Modal as MUIModal } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { styled as muiStyled } from '@mui/material/styles';

import styled from 'styled-components';

import { ms, scrollable, sm, xsm } from '../../theme';

import { modalSelectors } from './selectors';
import { modalActions } from './store';
import { CloseIconButton, ModalHeader } from './styled';

const MUIBox = muiStyled(Box)(
  () => `
  @media screen and (max-width: ${ms}) {
      width: 700px;
  }
  @media screen and (max-width: ${sm}) {
      width: 540px;
  }
  @media screen and (max-width: ${xsm}) {
      width: 320px;
  }
    max-height: calc(100% - 50px);
`
);

const Content = styled.div`
  border-radius: 10px;
  margin: 24px 0;
  max-height: 70vh;

  @media screen and (max-height: ${ms}) {
    max-height: 90vh;
  }

  ${scrollable}
`;

const getStyles = (styles) => ({
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '98%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '10px',
  ...styles,
});

export const Modal = ({ children, name, header, styles }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) =>
    modalSelectors.getModalIsOpen(state, name)
  );

  const onCloseHandler = useCallback(() => {
    dispatch(modalActions.setModalIsOpen({ name, isOpen: false }));
  }, [dispatch, name]);

  return (
    <MUIModal open={isOpen} onClose={onCloseHandler} disableAutoFocus>
      <MUIBox sx={getStyles(styles)}>
        <ModalHeader>{header}</ModalHeader>
        <CloseIconButton onClick={onCloseHandler} />
        <Content>{children}</Content>
      </MUIBox>
    </MUIModal>
  );
};
