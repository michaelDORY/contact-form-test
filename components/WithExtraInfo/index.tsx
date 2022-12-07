import React, { FC, ReactNode } from 'react';
import { Container, type ContainerProps, ExtraInfo } from './styles';

type Props = {
  children: ReactNode;
  extraInfo: string;
} & ContainerProps;

const WithExtraInfo: FC<Props> = (props) => {
  const { children, extraInfo } = props;

  return (
    <Container>
      {children}
      <ExtraInfo>{extraInfo}</ExtraInfo>
    </Container>
  );
};

export default WithExtraInfo;
