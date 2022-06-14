import styled from 'styled-components';
import ExitToAppIcon from 'mdi-react/ExitToAppIcon';
import AccountCircleOutlineIcon from 'mdi-react/AccountCircleOutlineIcon';

export const Wrapper = styled.div`
  background: white;
  width: 100%;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  min-height: 100px;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
`;

export const MenuWrapper = styled.div`
  display: flex;
`;

export const MenuItem = styled.div`
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
  font-size: 24px;
  margin-right: 30px;

  &:hover {
    text-decoration: underline;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
`;

export const UserIcon = styled(AccountCircleOutlineIcon)`
  margin-right: 10px;
`;

export const ExitIcon = styled(ExitToAppIcon)`
  cursor: pointer;
  margin-left: 30px;
`;

export const Content = styled.div`
  display: flex;
  max-width: 1000px;
  width: 100%;
  min-height: calc(100% - 120px);
  padding: 0 20px;
  margin: 20px auto 0 auto;
`;
