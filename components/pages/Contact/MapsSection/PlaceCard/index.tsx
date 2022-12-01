import MapImageSrc from '/public/map.png'
import Image from 'next/image';
import React, {FC} from 'react';
import {Flex} from '../../../../Flex/styles';
import Heading from "../../../../headings/Heading";
import ImageOverlay from '../../../../ImageOverlay';
import {MapContainer, PlaceCardWrapper} from './styles';

export interface IPlaceCard {
  country: string;
  address: string;
  inAdvance?: boolean;
}

const PlaceCard: FC<IPlaceCard> = (props) => {
  const {country, inAdvance, address} = props

  return (
    <PlaceCardWrapper inAdvance={!!inAdvance}>
      <Flex direction="column" alignItems="start">
        <Heading variant="h4" size="22px">{country}</Heading>
        <p>{address}</p>
      </Flex>
      <MapContainer>
        {
          inAdvance && <ImageOverlay text="בקרוב..."/>
        }
        <Image src={MapImageSrc} alt="map"/>
      </MapContainer>
    </PlaceCardWrapper>
  );
};

export default PlaceCard;
