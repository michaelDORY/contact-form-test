export interface SpacerProps {
  margin?: string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  padding?: string;
  pt?: string;
  pr?: string;
  pb?: string;
  pl?: string;
}

export const spacer = (props: SpacerProps) => ({
  margin: props.margin,
  marginTop: props.mt,
  marginRight: props.mr,
  marginBottom: props.mb,
  marginLeft: props.ml,
  padding: props.padding,
  paddingTop: props.pt,
  paddingRight: props.pr,
  paddingBottom: props.pb,
  paddingLeft: props.pl,
})
