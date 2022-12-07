import Image from 'next/image';
import React, { FC } from 'react';
import PrevSliderArrow from '../../../../public/sliderPrevArrow.png';
import { ArrowContainer } from './styles';

interface Props {
  className?: string;
  onClick?: any;
}

export const PrevArrow: FC<Props> = (props) => {
  const { className, onClick } = props;

  return (
    <ArrowContainer className={className} onClick={onClick}>
      <Image src={PrevSliderArrow} alt="prev" />
    </ArrowContainer>
  );
};

export const NextArrow: FC<Props> = (props) => {
  const { className, onClick } = props;

  return (
    <ArrowContainer className={className} onClick={onClick} reverse>
      <Image src={PrevSliderArrow} alt="prev" />
    </ArrowContainer>
  );
};
