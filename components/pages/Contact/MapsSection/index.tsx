import {FC} from "react";
import {Box} from "../../../Box/styles";
import {Flex} from "../../../Flex/styles";
import {LineHeading} from "../../../headings/LineHeading";
import PlaceCard, {IPlaceCard} from "./PlaceCard";

const MAPS_CONTENT: IPlaceCard[] = [
  {
    country: 'ישראל',
    address: '03-302758',
    inAdvance: true
  },
  {
    country: 'Czech Republic',
    address: 'Ztracená 36, Olomouc'
  },
  {
    country: 'Bucharest',
    address: 'Calea victoriei Nr. 124'
  }
];

const MapsSection: FC = () => {
  return (
    <Box width="783px">
      <LineHeading variant="h3" size="18px" styles={{mb: '50px'}}>המשרדים
        שלנו</LineHeading>
      <Flex justifyContent="space-between">
        {
          MAPS_CONTENT.map((place) => (
            <PlaceCard key={place.address} {...place} />))
        }
      </Flex>
    </Box>
  )
};

export default MapsSection;
