import React, {FC, ReactNode} from 'react';
import {StyledGrid, type StyledGridProps} from './styles';

type Props = {
  children?: ReactNode,
} & StyledGridProps

const Grid: FC<Props> = (props) => {
  const {children, ...restProps} = props

  return (
    <StyledGrid {...restProps}>
      {children}
    </StyledGrid>
  );
};

export default Grid;
