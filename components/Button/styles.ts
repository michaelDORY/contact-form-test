import styled from 'styled-components';
import { spacer, SpacerProps } from '../../utils/spacer';

enum ButtonVariants {
  primary = 'primary',
}

interface Props {
  variant?: ButtonVariants;
  styles?: SpacerProps;
}

export const StyledButton = styled.button<Props>`
  height: 60px;
  width: 324px;
  font-weight: 700;
  font-size: 20px;
  border-radius: 60px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  ${({ variant = ButtonVariants.primary, theme }) =>
    variant === ButtonVariants.primary
      ? {
          backgroundColor: theme.colors.primary,
        }
      : {}}
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transition: background-color 0.3s ease-in-out;
  }

  ${({ styles }) => spacer(styles || {})}
`;
