import styled from 'styled-components';
import penSrc from './resources/pen.png';

export const DescriptionSection = styled.section`
  background-color: #FFFFFF;
  background-image: url(${penSrc});
  background-size: 300px;
  background-repeat: no-repeat;
  background-position: 80% 40%;
  min-height: 100vh;
  padding: 70px 50px 70px 160px;
`;

export const LeftSide = styled.div`
  width: 800px;
  margin-bottom: 100px;
`;

export const Title = styled.h2`
  margin: 0;
  font-weight: 400;
  margin-top: 40px;
  font-size: 40px;
`;

export const SubTitle = styled.h3`
  font-weight: 400;
  font-size: 30px;
  margin-bottom: 40px;
`;

export const Slogan = styled.div`
  font-size: 24px;
  margin-left: 20px;
  margin-bottom: 100px;
  color: gray;
`;

export const Paragraph = styled.p`
  font-size: 20px;
  opacity: .7;
`;

export const ParagraphInner = styled.div`
  font-size: 18px;
  padding-left: 10px;
  opacity: .7;
`;
