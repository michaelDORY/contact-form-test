import React, {FC} from 'react';
import {SpacerProps} from "../../utils/spacer";
import {StyledInput} from './styles';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  styles?: SpacerProps;
  disabled: boolean;
}

const Input: FC<Props> = (props) => {
  return (
    <StyledInput {...props} />
  );
};

export default Input;
