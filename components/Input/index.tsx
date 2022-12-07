import React, { FC, HTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Flex } from '../Flex/styles';
import {
  type InputProps,
  Label,
  StyledInput,
  StyledTextArea,
  type TextAreaProps,
} from './styles';

export enum InputVariants {
  contained = 'contained',
  standard = 'standard',
}

type Props = {
  label?: string;
  multiline?: boolean;
  register?: UseFormRegisterReturn<any>;
  type?: string;
  variant?: InputVariants;
  disabled?: boolean;
} & (InputProps | TextAreaProps) &
  HTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

const Input: FC<Props> = (props) => {
  const {
    label,
    multiline,
    register,
    variant,
    type = 'text',
    disabled,
  } = props;

  return (
    <Flex alignItems="end" gap="14px" direction="column" width="100%">
      {!!label && <Label>{label}</Label>}
      {multiline ? (
        <StyledTextArea {...register} disabled={disabled} />
      ) : (
        <StyledInput type={type} variant={variant} {...register} />
      )}
    </Flex>
  );
};

export default Input;
