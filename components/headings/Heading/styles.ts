import styled from 'styled-components';
import { spacer, SpacerProps } from '../../../utils/spacer';

interface Props {
  isBold?: boolean;
  direction?: 'rtl' | 'ltr';
  size?: string;
  styles?: SpacerProps;
}

export const StyledHeading = styled.h1<Props>`
  font-weight: ${({ isBold = true }) => (isBold ? 700 : 500)};
  direction: ${({ direction = 'ltr' }) => direction};
  ${({ size }) => size && { fontSize: size }}
  ${({ styles }) => spacer(styles || {})}
`;
