import styled from 'styled-components';
import backSrc from './resources/background.jpeg';

export const MainSection = styled.section`
  background-image: url(${backSrc});
  background-size: 100% auto;
  background-repeat: no-repeat;
  min-height: 100vh;
  background-position: 0 0;
  padding: 70px 50px 70px 160px;
  color: #443F7D;
`;

export const MainTitle = styled.h1`
  margin-top: 200px;
  margin-bottom: 50px;
  font-weight: 400;
  max-width: 600px;
  font-size: 70px;
`;

export const Orange = styled.span`
  color: #FFC610;
`;

export const MainButton = styled.button`
  font-size: 28px;
  text-decoration: none;
  color: black;
  background-color: #AFB2D3;
  padding: 10px 30px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  outline: none;

  :active {
    transform: translate(1px, 1px);
  }
`;

export const Logo = styled.div`
  font-size: 34px;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MenuBar = styled.div`
  display: flex;
  margin-left: auto;
`;

export const MenuItem = styled.a`
  margin-left: 50px;
  font-size: 24px;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  background-color: ${({ isSolid }) => isSolid ? '#FFC610' : 'transparent'};
  padding: 10px 30px;
  border-radius: 30px;
`;
