import Image from 'next/image';
import React, { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import MockImage from '../../../../public/mockImage.jpg';
import { Box } from '../../../Box/styles';
import { Flex } from '../../../Flex/styles';
import { NextArrow, PrevArrow } from './Arrows';
import { Container, ImageContainer, InfoFlex } from './styles';

const mockLastForms = [
  {
    imageSrc: MockImage,
    formState: {
      firstName: 'AAA',
      lastName: 'AAA',
      phone: 'AAA',
      email: 'AAA',
      role: 'AAA',
      profilePicture: null,
      mainTitle: 'AAA',
      businessTitle: 'AAA',
      city: 'AAA',
      address: 'AAA',
      numberOfRooms: 10,
      apartArea: 10,
      apartArea2: 10,
      lotArea: 10,
      price: 'AAA',
      typeOfProposal: 'AAA', // 'sale' | 'rent',
      details: 'AAA',
      photos: [null, null, null, null, null],
      placeOfResidenceDescription: 'AAA',
      attractions: { value: 'First', label: 'First' },
      included: [
        { value: 'First', label: 'First' },
        {
          value: 'First',
          label: 'First',
        },
        '',
      ],
      soundTrack: { value: 'First', label: 'First' },
      video: { value: 'First', label: 'First' },
    },
  },
  {
    imageSrc: MockImage,
    formState: {
      firstName: 'BBB',
      lastName: 'BBB',
      phone: 'BBB',
      email: 'BBB',
      role: 'BBB',
      profilePicture: null,
      mainTitle: 'BBB',
      businessTitle: 'BBB',
      city: 'BBB',
      address: 'BBB',
      numberOfRooms: 10,
      apartArea: 10,
      apartArea2: 10,
      lotArea: 10,
      price: 'BBB',
      typeOfProposal: 'BBB', // 'sale' | 'rent',
      details: 'BBB',
      photos: [null, null, null, null, null],
      placeOfResidenceDescription: 'AAA',
      attractions: { value: 'First', label: 'First' },
      included: [
        { value: 'Second', label: 'Second' },
        {
          value: 'First',
          label: 'First',
        },
        '',
      ],
      soundTrack: { value: 'Second', label: 'Second' },
      video: { value: 'First', label: 'First' },
    },
  },
  {
    imageSrc: MockImage,
    formState: {
      firstName: 'AAA',
      lastName: 'AAA',
      phone: 'AAA',
      email: 'AAA',
      role: 'AAA',
      profilePicture: null,
      mainTitle: 'AAA',
      businessTitle: 'AAA',
      city: 'AAA',
      address: 'AAA',
      numberOfRooms: 10,
      apartArea: 10,
      apartArea2: 10,
      lotArea: 10,
      price: 'AAA',
      typeOfProposal: 'AAA', // 'sale' | 'rent',
      details: 'AAA',
      photos: [null, null, null, null, null],
      placeOfResidenceDescription: 'AAA',
      attractions: { value: 'First', label: 'First' },
      included: [
        { value: 'First', label: 'First' },
        {
          value: 'First',
          label: 'First',
        },
        '',
      ],
      soundTrack: { value: 'First', label: 'First' },
      video: { value: 'First', label: 'First' },
    },
  },
  {
    imageSrc: MockImage,
    formState: {
      firstName: 'BBB',
      lastName: 'BBB',
      phone: 'BBB',
      email: 'BBB',
      role: 'BBB',
      profilePicture: null,
      mainTitle: 'BBB',
      businessTitle: 'BBB',
      city: 'BBB',
      address: 'BBB',
      numberOfRooms: 10,
      apartArea: 10,
      apartArea2: 10,
      lotArea: 10,
      price: 'BBB',
      typeOfProposal: 'BBB', // 'sale' | 'rent',
      details: 'BBB',
      photos: [null, null, null, null, null],
      placeOfResidenceDescription: 'AAA',
      attractions: { value: 'First', label: 'First' },
      included: [
        { value: 'Second', label: 'Second' },
        {
          value: 'First',
          label: 'First',
        },
        '',
      ],
      soundTrack: { value: 'Second', label: 'Second' },
      video: { value: 'First', label: 'First' },
    },
  },
  {
    imageSrc: MockImage,
    formState: {
      firstName: 'AAA',
      lastName: 'AAA',
      phone: 'AAA',
      email: 'AAA',
      role: 'AAA',
      profilePicture: null,
      mainTitle: 'AAA',
      businessTitle: 'AAA',
      city: 'AAA',
      address: 'AAA',
      numberOfRooms: 10,
      apartArea: 10,
      apartArea2: 10,
      lotArea: 10,
      price: 'AAA',
      typeOfProposal: 'AAA', // 'sale' | 'rent',
      details: 'AAA',
      photos: [null, null, null, null, null],
      placeOfResidenceDescription: 'AAA',
      attractions: { value: 'First', label: 'First' },
      included: [
        { value: 'First', label: 'First' },
        {
          value: 'First',
          label: 'First',
        },
        '',
      ],
      soundTrack: { value: 'First', label: 'First' },
      video: { value: 'First', label: 'First' },
    },
  },
  {
    imageSrc: MockImage,
    formState: {
      firstName: 'BBB',
      lastName: 'BBB',
      phone: 'BBB',
      email: 'BBB',
      role: 'BBB',
      profilePicture: null,
      mainTitle: 'BBB',
      businessTitle: 'BBB',
      city: 'BBB',
      address: 'BBB',
      numberOfRooms: 10,
      apartArea: 10,
      apartArea2: 10,
      lotArea: 10,
      price: 'BBB',
      typeOfProposal: 'BBB', // 'sale' | 'rent',
      details: 'BBB',
      photos: [null, null, null, null, null],
      placeOfResidenceDescription: 'AAA',
      attractions: { value: 'First', label: 'First' },
      included: [
        { value: 'Second', label: 'Second' },
        {
          value: 'First',
          label: 'First',
        },
        '',
      ],
      soundTrack: { value: 'Second', label: 'Second' },
      video: { value: 'First', label: 'First' },
    },
  },
];

const sliderSettings = {
  infinite: false,
  slidesPerRow: 5,
  speed: 500,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  rtl: true,
};

interface Props {
  onSelect: any;
}

const LastVideosSlider: FC<Props> = (props) => {
  const { onSelect } = props;

  return (
    <Container width="100%" styles={{ padding: '9px 27px' }}>
      <Flex alignItems="center" justifyContent="space-between">
        <Box width="950px" styles={{ pl: '35px' }}>
          <Slider {...sliderSettings}>
            {mockLastForms.map(({ imageSrc, formState }, idx) => (
              <ImageContainer
                key={idx}
                width="160px"
                height="90px"
                onClick={() => onSelect(formState)}
              >
                <Image src={imageSrc} width={160} height={90} alt="" />
              </ImageContainer>
            ))}
          </Slider>
        </Box>
        <InfoFlex direction="column" alignItems="flex-end">
          <h4>העתק נתונים מסרטון קודם</h4>
          <p>
            בחר סרטון קודם שהזמנת
            <br />
            =והמערכת תכניס את כל הנתונים לטופס
          </p>
        </InfoFlex>
      </Flex>
    </Container>
  );
};

export default LastVideosSlider;
