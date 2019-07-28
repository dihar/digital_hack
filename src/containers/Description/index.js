import React, { useCallback } from 'react';
import {
  MainButton
} from '../Main/styles';
import {
  DescriptionSection,
  LeftSide,
  Slogan,
  Title,
  Paragraph,
  ParagraphInner,
  SubTitle
} from './styles';

const Description = () => {
  const openHandle = useCallback(() => {
    window.location = '#open';
  }, []);

  return (
    <DescriptionSection id="about">
      <LeftSide>
        <Title>«Бизнес перышко»</Title>
        <Slogan>легальный бизнес это легко и выгодно</Slogan>
        <SubTitle>
          Онлайн гид по государственным услугам
        </SubTitle>
        <Paragraph>
          – Пройди квест и получи персонализированную пошаговую инструкцию для регистрации своего дела
        </Paragraph>
        <Paragraph>
          – Легко и быстро зарегистрируй свое дело при помощи Госуслуг
        </Paragraph>
        <Paragraph>
          – Получи гарантированные бонусы!
        </Paragraph>
        <ParagraphInner>
          90 000 руб от государства (всем новым ИП п/п №369 от 27.07.2019)
        </ParagraphInner>
        <ParagraphInner>
          180 000 от рекламных площадок – на раскрутку своего бизнеса
        </ParagraphInner>
      </LeftSide>
      <MainButton onClick={openHandle}>
        Хочу открыть бизнес
      </MainButton>
    </DescriptionSection>
  )
};

export default Description;
