import React, { FormEvent, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Button from '../../../Button';
import { Flex } from '../../../Flex/styles';
import Heading from '../../../headings/Heading';
import Input from '../../../Input';
import LoadingOverlay from '../../../LoadingOverlay';
import { StyledContactForm } from './styles';

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  return (
    <StyledContactForm width="525px" onSubmit={onSubmit}>
      <Heading
        variant="h3"
        isBold={false}
        direction="rtl"
        styles={{ mb: '69px' }}
      >
        <strong>נשמח לסייע עם כל שאלה ובקשה.</strong>
        <br />
        מלאו את הפרטים הבאים ואנו נשוב אליכם במהרה!
      </Heading>
      <Flex gap="39px" justifyContent="stretch" styles={{ mb: '48px' }}>
        <Input disabled={isLoading} placeholder="דוא”ל*" />
        <Input disabled={isLoading} placeholder="שם מלא*" />
      </Flex>
      <Input
        disabled={isLoading}
        styles={{ mb: '48px' }}
        placeholder="איך נוכל לעזור לך?*"
      />
      <Flex justifyContent="end" styles={{ mb: '48px' }}>
        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''} />
      </Flex>
      <Button disabled={isLoading}>שלח הודעה</Button>
      {isLoading && <LoadingOverlay />}
    </StyledContactForm>
  );
};

export default ContactForm;
