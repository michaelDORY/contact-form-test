import styled from "styled-components";
import {spacer, SpacerProps} from "../../utils/spacer";

interface Props {
  width?: string;
  styles?: SpacerProps;
}

export const Box = styled.div<Props>`
  width: ${({width}) => width || '100%'};
  ${({styles}) => spacer(styles || {})}
`
