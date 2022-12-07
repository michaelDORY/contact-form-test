import styled from 'styled-components';

interface Props {
  width?: string;
}

export const StyledContactForm = styled.form<Props>`
  position: relative;
  width: ${({ width }) => width || '100%'};
  padding: 62px 32px 67px;
`;
