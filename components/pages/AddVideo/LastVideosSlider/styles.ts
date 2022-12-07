import styled from 'styled-components';
import { Box } from '../../../Box/styles';
import { Flex } from '../../../Flex/styles';

export const Container = styled(Box)`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
`;

export const ImageContainer = styled(Box)`
  & img {
    cursor: pointer;
    transition: box-shadow 0.3s ease-in-out;
  }

  & img:hover {
    box-shadow: 0 0 10px #b1b1b1;
  }
`;

export const InfoFlex = styled(Flex)`
  text-align: right;
  color: #fff;

  & .slick-slider {
    padding: 0 20px !important;
  }

  & h4 {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 13px;
  }

  & p {
    font-size: 16px;
  }
`;

export const ArrowContainer = styled.div<{ reverse?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 31px;
  height: 31px;
  background: rgba(37, 31, 31, 0.3);
  transition: background 0.3s ease-in-out;
  transform: rotate(${({ reverse }) => (reverse ? '180deg' : 0)})
    translateY(${({ reverse }) => (reverse ? '50%' : '-50%')});

  ${({ reverse }) => (reverse ? { right: '-40px' } : { left: '-40px' })}
  & .slick-slide > div {
    padding-left: 20px;
    padding-right: 20px;
  }

  &:before {
    content: '';
  }

  &:hover {
    background: rgba(37, 31, 31, 1);
  }
`;
