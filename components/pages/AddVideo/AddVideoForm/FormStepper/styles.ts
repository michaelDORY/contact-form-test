import styled from 'styled-components';
import { spacer, SpacerProps } from '../../../../../utils/spacer';
import { StyledButton } from '../../../../Button/styles';

interface ButtonsContainerProps {
  styles?: SpacerProps;
}

interface NavItemProps {
  isActive?: boolean;
}

export const ButtonsContainer = styled.div<ButtonsContainerProps>`
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  ${({ styles }) => spacer(styles || {})}
`;

const NavigatingButton = styled.button.attrs({ type: 'button' })`
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  padding: 10px;
  background: transparent;
`;

export const PrevButton = styled(NavigatingButton)`
  display: flex;
  flex-direction: row-reverse;
  color: #7995af;

  &:hover svg {
    filter: drop-shadow(1px 2px 3px #7995af);
    transition: filter 0.3s ease-in-out;
  }
`;

export const SubmitButton = styled(StyledButton)`
  font-size: 25px;
`;

export const NextButton = styled(NavigatingButton)`
  &:hover svg {
    filter: drop-shadow(1px 2px 3px ${({ theme }) => theme.colors.primary});
    transition: filter 0.3s ease-in-out;
  }
`;

export const FormStepperStyled = styled.div`
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  width: 1150px;
  padding: 102px 176px 80px 214px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
`;

export const NavBarSection = styled.div`
  background: #7995af;
  padding: 90px 40px 90px 56px;
  display: flex;
  justify-content: end;
`;

export const NavBar = styled.nav`
  background: #7995af;
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 40px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`;

export const NavItem = styled.li<NavItemProps>`
  font-weight: ${({ isActive }) => (isActive ? 700 : 400)};
  color: ${({ isActive }) =>
    isActive ? 'rgba(255, 255, 255, 1);' : 'rgba(255, 255, 255, 0.3);'};
`;
