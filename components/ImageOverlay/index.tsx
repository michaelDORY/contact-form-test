import React, {FC} from 'react';
import {StyledImageOverlay} from './styles';

interface Props {
  text?: string;
}

const ImageOverlay: FC<Props> = (props) => {
  const {text = ''} = props

  return (
    <StyledImageOverlay>
      {text}
    </StyledImageOverlay>
  );
};

export default ImageOverlay;
