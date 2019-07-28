import styled from 'styled-components';

export const Container = styled.section`
  background-color: #DBDCF1;
  min-height: 100vh;
  padding: 70px 50px;
  border-top: 1px solid rgba(0, 0, 0, .3);
`;

export const FormContainer = styled.div`
  margin: 40px auto;
  width: 800px;
  background: #E1E2F0;
  overflow: hidden;
  position: relative;
  height: 500px;
  box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, .2);
`;

export const QuestionsLine = styled.div`
  display: flex;
  position: absolute;
  left: ${({ step }) => -step * 800 + 'px'};
  top: 0;
  transition: left .5s ease;
`;

export const QuestionStep = styled.div`
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  position: relative;

 a {
   font-size: 20px;
 }
`;

export const Title = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
`;

export const TextInputStyled = styled.input`
  background: #C6C8EF;
  font-size: 26px;
  border: none;
  padding: 15px;
  border-radius: 30px;
  outline: none;
`;

export const MoveButton = styled.button`
  font-size: 28px;
  text-decoration: none;
  color: black;
  background-color: #E4B02D;
  padding: 10px 30px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  outline: none;

  :active {
    transform: translate(1px, 1px);
  }
`;

export const Actions = styled.div`
  position: absolute;
  bottom: 30px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const YesNoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

export const YesNoButton = styled.button`
  font-size: 24px;
  text-decoration: none;
  color: black;
  background-color: ${({ isActive }) => isActive ? '#CCC' : '#DDD'};
  padding: 10px 30px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  outline: none;

  :active {
    transform: translate(1px, 1px);
  }
`;

export const BanksStyled = styled.div`
  width: 1000px;
  margin: 0 auto;
  img {
    width: 100%;
  }
`;
