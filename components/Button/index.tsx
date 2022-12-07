import React, { FC, ReactNode } from 'react';
import { StyledButton } from './styles';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
}

const Button: FC<Props> = (props) => {
  const { children } = props;

  return <StyledButton>{children}</StyledButton>;
};

export default Button;
