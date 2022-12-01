import styled from "styled-components";
import {spacer} from "../../../utils/spacer";

export const LineHeadingWrapper = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
  max-width: 100%;
  justify-content: stretch;
  ${spacer}
`

export const Line = styled.div`
  height: 1px;
  background-color: ${props => props.theme.colors.inActive};
  flex: 1;
`
