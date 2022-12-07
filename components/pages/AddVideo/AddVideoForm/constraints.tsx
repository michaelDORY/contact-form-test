import React from "react";
import {OptionType} from "../../../Select";
import FirstStep from "./FormStepper/Steps/FirstStep";
import SecondStep from "./FormStepper/Steps/SecondStep";
import ThirdStep from "./FormStepper/Steps/ThirdStep";

export const STEPS = [
  {
    title: 'פרטי הסוכן',
    component: FirstStep
  },
  {
    title: ['פרטי הנכס', 'תמונות הנכס'],
    component: SecondStep
  },
  {
    title: ['בסביבת הנכס', 'בחירת פסקול'],
    component: ThirdStep
  }
]

export interface IFormValues {
  firstName: string,
  lastName: string,
  phone: string,
  email: string,
  role: string,
  profilePicture: File | null,
  mainTitle: string,
  businessTitle: string,
  city: string,
  address: string,
  numberOfRooms: number | '',
  apartArea: number | '',
  apartArea2: number | '',
  lotArea: number | '',
  price: string,
  typeOfProposal: 'sale' | 'rent' | '',
  details: string,
  photos: (File | null)[],
  placeOfResidenceDescription: string,
  attractions: OptionType | null,
  included: (OptionType | null)[],
  soundTrack: OptionType | null,
  video: OptionType | null
}

export const defaultValues: IFormValues = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  role: '',
  profilePicture: null,
  mainTitle: '',
  businessTitle: '',
  city: '',
  address: '',
  numberOfRooms: '',
  apartArea: '',
  apartArea2: '',
  lotArea: '',
  price: '',
  typeOfProposal: '', // 'sale' | 'rent',
  details: '',
  photos: [null, null, null, null, null],
  placeOfResidenceDescription: '',
  attractions: null,
  included: [null, null, null],
  soundTrack: null,
  video: null
}
