import styled from '@emotion/styled';

export const MainHeader = styled.header``;

export const HeaderContainer = styled.div`
  display: flex;
  margin: 0 auto;

  @media (max-width: 767px) {
    width: 320px;
    justify-content: space-between;
    padding: 20px 20px 0;
  }

  @media (min-width: 768px) {
    width: 768px;
    padding: 24px 32px 0;
    margin-bottom: 80px;
  }

  @media (min-width: 1280px) {
    padding: 32px 16px 0;
    margin-bottom: 30px;
    width: 1280px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 32px 0px;
  justify-content: space-between;  
`;

export const AuthNavigation = styled.div`
  display: flex;
  align-items: center;
`;

export const BurgerMenuBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
