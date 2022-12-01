import React, {FC, ReactNode} from "react";
import {SpacerProps} from "../../../utils/spacer";
import {StyledHeading} from "../Heading/styles";
import {Line, LineHeadingWrapper} from "./styles";

type Props = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  children: ReactNode,
  styles?: SpacerProps,
  size?: string
}

export const LineHeading: FC<Props> = (props) => {
  const {variant, children, styles, size} = props

  return (
    <LineHeadingWrapper {...styles}>
      <Line/>
      <StyledHeading as={variant} size={size}>{children}</StyledHeading>
    </LineHeadingWrapper>
  )
}
