import styled from 'styled-components';
import { spacer, SpacerProps } from '../../utils/spacer';
import { InputVariants } from './index';

export interface InputProps {
  styles?: SpacerProps;
  variant?: InputVariants;
}

export interface TextAreaProps {
  height?: string;
}

export const TextFieldStyles = {
  display: 'block',
  padding: '0 0 12px',
  fontSize: '18px',
  width: '100%',
  fontFamily: 'Heebo, sans-serif',
};

export const ContainedTextFieldStyles = {
  border: `1px solid #B1B1B1`,
  borderRadius: '5px',
  height: '50px',
  padding: '16px',
  fontWeight: 500,
};

const PlaceholderStyles = {
  fontFamily: 'Heebo, sans-serif',
  fontWeight: '600',
  fontSize: '18px',
  color: 'rgba(0, 0, 0, 0.3)',
};

export const StyledInput = styled.input<InputProps>`
  direction: rtl;

  ${TextFieldStyles};

  ${({ variant = InputVariants.standard, theme }) =>
    variant === InputVariants.contained
      ? ContainedTextFieldStyles
      : {
          borderBottom: `1px solid ${theme.colors.inActive}`,
        }}
  ${({ styles }) => spacer(styles || {})}
  &::placeholder {
    color: ${(props) => props.theme.colors.inActiveText};
  }

  &::placeholder {
    ${PlaceholderStyles}
  }
`;

export const StyledTextArea = styled.textarea<TextAreaProps>`
  direction: rtl;
  resize: none;
  outline: none;
  ${TextFieldStyles}
  ${ContainedTextFieldStyles}
  height: ${({ height }) => height || '100px'};

  &::placeholder {
    ${PlaceholderStyles}
  }
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 18px;
`;
