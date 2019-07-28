import React, { useCallback } from 'react';
import {
  MainSection,
  MenuBar,
  MenuItem,
  TopBar,
  Logo,
  MainTitle,
  Orange,
  MainButton
} from './styles';

const Main = () => {
  const moreHandle = useCallback(() => {
    window.location = '#about';
  }, []);

  return (
    <MainSection>
      <TopBar>
        <Logo>Бизнес перышко</Logo>
        <MenuBar>
          <MenuItem href="#about">О нас</MenuItem>
          <MenuItem href="#open">Открыть бизнес</MenuItem>
          <MenuItem isSolid href="#reg">Регистрация</MenuItem>
        </MenuBar>
      </TopBar>
      <MainTitle>Хочешь открыть свой <Orange>бизнес</Orange>?</MainTitle>
      <MainButton onClick={moreHandle}>Подробнее</MainButton>
    </MainSection>
  )
};

export default Main;
