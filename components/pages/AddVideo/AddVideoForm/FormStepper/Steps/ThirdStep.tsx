import React, { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Flex } from '../../../../../Flex/styles';
import Grid from '../../../../../Grid';
import Input from '../../../../../Input';
import Select, { OptionType } from '../../../../../Select';
import { IFormValues } from '../../constraints';

const MOCK_OPTIONS = [
  { value: 'First', label: 'First' },
  {
    value: 'Second',
    label: 'Second',
  },
];

interface Props {
  hookForm: UseFormReturn<IFormValues>;
}

const ThirdStep: FC<Props> = (props) => {
  const { hookForm } = props;
  const { register, watch, setValue } = hookForm;

  return (
    <Flex direction="column" gap="40px">
      <Grid row reverseDirection gap="40px" justifyContent="stretch">
        <Grid column>
          <Input
            register={register('placeOfResidenceDescription')}
            multiline
            placeholder="תיאור קצר וקולע של מקום המגורים, לדוגמה: לגור בראש העין המתחדשת"
            label="שם פרטי"
          />
        </Grid>
      </Grid>
      <Grid row reverseDirection gap="40px" justifyContent="stretch">
        <Grid column>
          <Select
            value={watch('attractions')}
            onChange={(newVal: OptionType) => setValue('attractions', newVal)}
            label="נקודות עניין בסביבת הנכס"
            options={MOCK_OPTIONS}
          />
        </Grid>
        <Grid column>
          <Select
            value={watch('included.0')}
            onChange={(newVal: OptionType) => setValue('included.0', newVal)}
            label="מה יש בנכס"
            options={MOCK_OPTIONS}
          />
        </Grid>
      </Grid>
      <Grid row reverseDirection gap="40px" justifyContent="stretch">
        <Grid column>
          <Select
            value={watch('included.1')}
            onChange={(newVal: OptionType) => setValue('included.1', newVal)}
            label="מה יש בנכס"
            options={MOCK_OPTIONS}
          />
        </Grid>
        <Grid column>
          <Select
            value={watch('included.2')}
            onChange={(newVal: OptionType) => setValue('included.2', newVal)}
            label="מה יש בנכס"
            options={MOCK_OPTIONS}
          />
        </Grid>
      </Grid>
      <Grid row reverseDirection gap="40px" justifyContent="stretch">
        <Grid column>
          <Select
            value={watch('soundTrack')}
            onChange={(newVal: OptionType) => setValue('soundTrack', newVal)}
            label="פסקול"
            options={MOCK_OPTIONS}
          />
        </Grid>
        <Grid column>
          <Select
            value={watch('video')}
            onChange={(newVal: OptionType) => setValue('video', newVal)}
            label="סרטון אווירה"
            options={MOCK_OPTIONS}
          />
        </Grid>
      </Grid>
    </Flex>
  );
};

export default ThirdStep;
