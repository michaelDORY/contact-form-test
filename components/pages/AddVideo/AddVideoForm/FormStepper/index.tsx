import React, { FC, ReactNode, useMemo } from 'react';
import { UseFormReturn } from 'react-hook-form';
import Stepper from '../../../../Stepper';
import { IFormValues } from '../constraints';
import { NextArrow, PrevArrow } from './Arrows';
import {
  ButtonsContainer,
  Content,
  FormStepperStyled,
  NavBar,
  NavBarSection,
  NavItem,
  NextButton,
  PrevButton,
  SubmitButton,
} from './styles';

interface Props {
  currentPage: number;
  changePage: (newPage: number) => void;
  stepTitles: (string | string[])[];
  children: ReactNode;
  hookForm: UseFormReturn<IFormValues>;
}

const FormStepper: FC<Props> = (props) => {
  const { changePage, currentPage, children, stepTitles } = props;
  const isLastStep = useMemo(
    () => currentPage === stepTitles.length - 1,
    [currentPage, stepTitles]
  );
  const isFirstStep = useMemo(() => currentPage === 0, [currentPage]);
  const loading = false;

  return (
    <FormStepperStyled style={{ width: 'fit-content' }}>
      <Content>
        <Stepper currentPage={currentPage}>{children}</Stepper>
        <ButtonsContainer styles={{ mt: '95px' }}>
          {isLastStep ? (
            <div style={{ width: '211px' }} />
          ) : (
            <NextButton
              disabled={currentPage >= stepTitles.length - 1}
              onClick={() => changePage(currentPage + 1)}
            >
              <NextArrow />
              הבא
            </NextButton>
          )}
          {isLastStep && (
            <SubmitButton disabled={loading}>הפקסרטון</SubmitButton>
          )}
          {!isFirstStep && (
            <PrevButton
              disabled={currentPage <= 0}
              onClick={() => changePage(currentPage - 1)}
            >
              <PrevArrow />
              הקודם
            </PrevButton>
          )}
        </ButtonsContainer>
      </Content>
      <NavBarSection>
        <NavBar>
          <ul>
            {stepTitles.map((title, index) =>
              Array.isArray(title) ? (
                <ul key={index}>
                  {title.map((item, i) => (
                    <NavItem key={i} isActive={currentPage === index}>
                      {item}
                    </NavItem>
                  ))}
                </ul>
              ) : (
                <NavItem key={index} isActive={currentPage === index}>
                  {title}
                </NavItem>
              )
            )}
          </ul>
        </NavBar>
      </NavBarSection>
    </FormStepperStyled>
  );
};

export default FormStepper;
