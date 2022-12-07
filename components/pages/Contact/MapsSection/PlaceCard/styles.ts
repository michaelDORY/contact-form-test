import styled from 'styled-components';

interface PlaceCardWrapperProps {
  inAdvance: boolean;
}

export const PlaceCardWrapper = styled.div<PlaceCardWrapperProps>`
  width: 237px;
  display: flex;
  flex-direction: column;
  gap: 26px;
  text-align: left;
  overflow: hidden;

  ${({ inAdvance }) =>
    inAdvance
      ? {
          position: 'relative',
        }
      : null}
  & p, & h4 {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
  }
`;

export const MapContainer = styled.div`
  width: 237px;
  height: 237px;
`;
