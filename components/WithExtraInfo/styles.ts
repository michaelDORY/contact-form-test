import styled from "styled-components";

export type ContainerProps = {
  gap?: string,
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: ${({gap = '15px'}) => gap};
`

export const ExtraInfo = styled.p`
  color: rgba(0, 0, 0, 0.6);
  text-align: right;
  font-size: 14px;
`
