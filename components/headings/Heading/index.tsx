import React, { FC, ReactNode } from 'react';
import { SpacerProps } from '../../../utils/spacer';
import { StyledHeading } from './styles';

interface Props {
  isBold?: boolean;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  direction?: 'ltr' | 'rtl';
  children: ReactNode;
  size?: string;
  styles?: SpacerProps;
}

const Heading: FC<Props> = (props) => {
  const { variant, children, ...rest } = props;
  return (
    <StyledHeading as={variant} {...rest}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
