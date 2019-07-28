import React, { useState, useCallback } from 'react';
import TextInput from './TextInput';
import YesNo from './YesNo';
import Banks from './Banks';
import {
  Container,
  FormContainer,
  QuestionsLine,
  QuestionStep,
  Title,
  Actions,
  MoveButton
} from './styles';
import { stepsData } from './constants';

const getInput = (type) => {
  switch (type) {
    case 'yesno':
      return YesNo;
    case 'text':
      return TextInput;
    case 'message':
        return () => (<a href="#rrr">Проверь тут</a>);
    default:
      return TextInput;
  }
};

const Survey = () => {
  const [steps, setSteps] = useState(stepsData);
  const [activeStep, setActive] = useState(0);

  const changeHandle = useCallback((ev, { value }) => {
    setSteps(steps.map((step, i) => ({
      ...step,
      value: activeStep === i ? value : step.value
    })));
  }, [steps, activeStep]);

  const onBack = useCallback(() => {
    setActive(activeStep - 1);
  }, [activeStep]);

  const onNext = useCallback(() => {
    setActive(activeStep + 1);
  }, [activeStep]);

  if (activeStep === steps.length) {
    return (
      <Container id='open'>
        <Banks />
      </Container>
    );
  }

  const isNextAvailable = steps[activeStep].value && activeStep < steps.length;
  const nextCaption = activeStep === steps.length - 1 ? 'Завершить' : 'Далее';


  return (
    <Container id='open'>
      <FormContainer>
        <QuestionsLine step={activeStep}>
          {steps.map((step, i) => {
            const InputType = getInput(step.type);
            return (
              <QuestionStep key={i}>
                <Title>{step.title}</Title>
                <InputType onChange={changeHandle} value={step.value} />
              </QuestionStep>
            );
          })}
        </QuestionsLine>
        <Actions>
          {!!activeStep ? <MoveButton onClick={onBack}>Назад</MoveButton> : <div />}
          {!!isNextAvailable && <MoveButton onClick={onNext}>{nextCaption}</MoveButton>}
        </Actions>
      </FormContainer>
    </Container>
  );
};

export default Survey;
