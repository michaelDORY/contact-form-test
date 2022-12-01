import styled from "styled-components";
import {spacer, SpacerProps} from "../../utils/spacer";

interface Props {
  styles?: SpacerProps
}

export const StyledInput = styled.input<Props>`
  display: block;
  direction: rtl;
  padding: 0 0 12px;
  font-size: 18px;
  border-bottom: 1px solid ${(props) => props.theme.colors.inActive};
  width: 100%;

  ${({styles}) => spacer(styles || {})}
  &::placeholder {
    color: ${(props) => props.theme.colors.inActiveText};
  }
`
