import styled from 'styled-components';

export type StyledGridProps = {
  column?: boolean;
  row?: boolean;
  gap?: string;
  reverseDirection?: boolean;
  alignItems?: string;
  justifyContent?: string;
};

export const StyledGrid = styled.div<StyledGridProps>`
  ${({ row, gap = 0, reverseDirection, alignItems, justifyContent }) =>
    row
      ? {
          width: '100%',
          display: 'flex',
          flexDirection: reverseDirection ? 'row-reverse' : 'row',
          gap,
          alignItems,
          justifyContent,
        }
      : {
          gap,
          display: 'flex',
          flexDirection: 'column',
          flex: `1 1 0px`,
          '& > *': {
            width: '100%',
          },
        }}
`;
