import React from 'react';
import {Loader, LoaderContainer} from './styles';

const LoadingOverlay = () => {
  return (
    <LoaderContainer>
      <Loader>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Loader>
    </LoaderContainer>
  );
};

export default LoadingOverlay;
