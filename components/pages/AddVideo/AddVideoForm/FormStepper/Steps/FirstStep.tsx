import React, {FC} from 'react';
import {UseFormReturn} from "react-hook-form";
import {useImagePreview} from "../../../../../../hooks/useImagePreview";
import FileUploader from "../../../../../FileUploader";
import {Flex} from '../../../../../Flex/styles';
import Grid from '../../../../../Grid';
import Input, {InputVariants} from "../../../../../Input";
import {Label} from '../../../../../Input/styles';
import WithExtraInfo from "../../../../../WithExtraInfo";
import {IFormValues} from "../../constraints";

interface Props {
  hookForm: UseFormReturn<IFormValues>
}

const FirstStep: FC<Props> = (props) => {
  const {hookForm} = props
  const {register, setValue, watch} = hookForm
  const watchedProfilePicture = watch('profilePicture')
  const profilePictureUrl = useImagePreview(watchedProfilePicture)

  return (
    <Flex direction="column" gap='40px'>
      <Grid row reverseDirection gap='40px' justifyContent='stretch'>
        <Grid column>
          <Input register={register('firstName')}
                 variant={InputVariants.contained}
                 label="שם פרטי"/>
        </Grid>
        <Grid column>
          <Input register={register('lastName')}
                 variant={InputVariants.contained}
                 label="שם פרטי"/>
        </Grid>
      </Grid>
      <Grid row reverseDirection gap='40px' justifyContent='stretch'>
        <Grid column>
          <Input register={register('phone')} variant={InputVariants.contained}
                 label="טל. נייד"/>
        </Grid>
        <Grid column>
          <Input register={register('email')} variant={InputVariants.contained}
                 label="דוא”ל"/>
        </Grid>
      </Grid>
      <Grid row reverseDirection gap='40px' justifyContent='stretch'
            alignItems="flex-start">
        <Grid column>
          <Input register={register('role')} variant={InputVariants.contained}
                 label="תפקיד הסוכן"/>
        </Grid>
        <Grid column>
          <Flex direction="column" alignItems="flex-end" gap="14px">
            <Label>תמונת פרופיל</Label>
            <WithExtraInfo
              extraInfo="סוגי קבצים מורשים: jpg, jpeg, png, Max. file size: 6 MB">
              <FileUploader
                imgUrl={profilePictureUrl as (string | null)}
                styles={{ml: 'auto'}}
                onChange={(value) => setValue('profilePicture', value)}
                value={watchedProfilePicture ?? undefined}
                buttonType='button'/>
            </WithExtraInfo>
          </Flex>
        </Grid>
      </Grid>
    </Flex>
  );
};

export default FirstStep;
