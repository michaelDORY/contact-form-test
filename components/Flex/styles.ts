import styled from "styled-components";
import {spacer, SpacerProps} from "../../utils/spacer";

type FlexProps = {
  direction?: 'row' | 'column',
  gap?: string,
  wrap?: boolean,
  width?: string,
  alignItems?: string,
  justifyContent?: string,
  height?: string,
  styles?: SpacerProps
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({direction}) => direction || 'row'};
  gap: ${({gap}) => gap || 0};
  flex-wrap: ${({wrap}) => wrap ? 'wrap' : 'nowrap'};
  width: ${({width}) => width || '100%'};
  height: ${({height}) => height || '100%'};
  align-items: ${({alignItems}) => alignItems || 'center'};
  justify-content: ${({justifyContent}) => justifyContent || 'center'};
  ${({styles}) => spacer(styles || {})}
`
