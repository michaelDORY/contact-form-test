import Image from "next/image";
import React from 'react';
import FormSentIcon from '../../../../../../public/formSentIcon.png'
import Button from "../../../../../Button";
import {Flex} from '../../../../../Flex/styles';
import {FinalStepStyled} from "./styles";

const FinalStep = () => {
  return (
    <FinalStepStyled>
      <Flex direction="column" justifyContent='center' alignItems="center"
            styles={{mt: '50px'}}>
        <Image src={FormSentIcon} alt='form sent'/>
        <h1>הסרטון שלך בדרך!</h1>
        <p>אנו נשלח אליך לאישור, לפני שנעלה לרשתות החברתיות</p>
        <Button>אני רוצה עוד סרטון</Button>
      </Flex>
    </FinalStepStyled>
  );
};

export default FinalStep;
