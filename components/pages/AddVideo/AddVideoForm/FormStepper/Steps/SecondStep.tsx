import React, {FC} from 'react';
import {UseFormReturn} from "react-hook-form";
import FileUploader from "../../../../../FileUploader";
import {Flex} from "../../../../../Flex/styles";
import Grid from "../../../../../Grid";
import Input, {InputVariants} from "../../../../../Input";
import WithExtraInfo from "../../../../../WithExtraInfo";
import {IFormValues} from "../../constraints";

interface Props {
  hookForm: UseFormReturn<IFormValues>
}

const SecondStep: FC<Props> = (props) => {
  const {hookForm} = props
  const {register, setValue, watch} = hookForm

  return (
    <Flex direction="column" gap='40px'>
      <Grid row reverseDirection gap='40px' justifyContent='stretch'>
        <Grid column>
          <Input register={register('mainTitle')}
                 variant={InputVariants.contained}
                 label="שם פרטיכותרת ראשית לנכס"/>
        </Grid>
      </Grid>
      <Grid row reverseDirection gap='40px' justifyContent='stretch'>
        <Grid column>
          <Input register={register('businessTitle')}
                 variant={InputVariants.contained} label="כותרת משנית לעסק"/>
        </Grid>
      </Grid>
      <Grid row reverseDirection gap='40px' justifyContent='stretch'>
        <Grid column>
          <Input register={register('city')} variant={InputVariants.contained}
                 label="עיר"/>
        </Grid>
        <Grid column>
          <Input register={register('address')}
                 variant={InputVariants.contained}
                 label="כתובת"/>
        </Grid>
      </Grid>
      <Grid row reverseDirection gap='40px' justifyContent='stretch'>
        <Grid column>
          <Input type='number'
                 register={register('numberOfRooms', {valueAsNumber: true})}
                 variant={InputVariants.contained} label="מספר חדרים"/>
        </Grid>
        <Grid column>
          <Input type='number'
                 register={register('apartArea', {valueAsNumber: true})}
                 variant={InputVariants.contained} label='שטח הדירה(מ"ר)'/>
        </Grid>
      </Grid>
      <Grid row reverseDirection gap='40px' justifyContent='stretch'>
        <Grid column>
          <Input type='number'
                 register={register('apartArea2', {valueAsNumber: true})}
                 variant={InputVariants.contained} label='שטח המגרש(מ"ר)'/>
        </Grid>
        <Grid column>
          <Input type='number' register={register('lotArea')}
                 variant={InputVariants.contained}
                 label='סוג הנכס'/>
        </Grid>
      </Grid>
      <Grid row reverseDirection gap='40px' justifyContent='flex-end'>
        <Grid column>
          <Input register={register('price')}
                 variant={InputVariants.contained} label='מחיר'/>
        </Grid>
      </Grid>
      <Grid row reverseDirection gap='40px' justifyContent='flex-end'>
        <Grid column>
          <Input register={register('typeOfProposal')}
                 variant={InputVariants.contained}
                 label='מכירה/השכרה'/>
        </Grid>
      </Grid>
      <Grid row reverseDirection gap='40px' justifyContent='stretch'>
        <Grid column>
          <Input
            register={register('details')} multiline height='175px'
            label='מכירה/השכרה'/>
        </Grid>
      </Grid>
      <Grid row reverseDirection>
        <Grid column gap='58px'>
          <WithExtraInfo
            extraInfo='סוגי קבצים מורשים: jpg, jpeg, png, Max. file size: 6 MB'>
            <Flex direction='column' gap='58px'>
              <Flex gap='70px' justifyContent='flex-end'>
                {
                  Array(3).fill(null).map((_, index) => (
                    <FileUploader
                      key={index}
                      onChange={(value) => setValue(`photos.${index}`, value)}
                      value={watch('photos')[index] ?? undefined}/>
                  ))
                }
              </Flex>
              <Flex gap='70px' justifyContent='flex-end'>
                {
                  Array(2).fill(null).map((_, index) => (
                    <FileUploader
                      key={index + 3}
                      onChange={(value) => setValue(`photos.${index + 3}`, value)}
                      value={watch('photos')[index + 3] ?? undefined}/>
                  ))
                }
              </Flex>
            </Flex>
          </WithExtraInfo>
        </Grid>
      </Grid>
    </Flex>
  );
};

export default SecondStep;
