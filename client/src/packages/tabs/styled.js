import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TabsWrapper = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.mediumBorderColor};
  box-sizing: border-box;
  border-radius: 8px;
  justify-content: space-between;
`;

export const Tab = styled(NavLink)`
  display: flex;
  width: 100%;
  padding: 5px;
  text-align: center;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;
  text-decoration: none;
  background: ${({ isActiveTab, theme }) =>
    isActiveTab
      ? theme.colors.activeBackground
      : theme.colors.secondaryBackground};
  color: ${({ isActiveTab, theme }) =>
    isActiveTab
      ? theme.colors.secondaryBackground
      : theme.colors.activeBackground};

  :hover {
    background: ${({ theme }) => theme.colors.activeBackground};
    color: ${({ theme }) => theme.colors.secondaryBackground};
  }

  :first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  :last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;

export const EmbeddedTab = styled.div`
  display: flex;
  width: 100%;
  padding: 5px;
  text-align: center;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;
  text-decoration: none;
  background: ${({ isActiveTab, theme }) =>
    isActiveTab
      ? theme.colors.activeBackground
      : theme.colors.secondaryBackground};
  color: ${({ isActiveTab, theme }) =>
    isActiveTab
      ? theme.colors.secondaryBackground
      : theme.colors.activeBackground};

  :hover {
    background: ${({ theme }) => theme.colors.activeBackground};
    color: ${({ theme }) => theme.colors.secondaryBackground};
  }

  :first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  :last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;
