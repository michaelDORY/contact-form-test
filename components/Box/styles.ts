import styled from "styled-components";
import {spacer, SpacerProps} from "../../utils/spacer";

interface Props {
  width?: string;
  height?: string;
  styles?: SpacerProps;
}

export const Box = styled.div<Props>`
  height: ${({height}) => height || 'auto'};;
  width: ${({width}) => width || '100%'};
  ${({styles}) => spacer(styles || {})}
`
