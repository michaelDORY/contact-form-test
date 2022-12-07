import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Flex } from '../../../Flex/styles';
import LastVideosSlider from '../LastVideosSlider';
import { defaultValues, IFormValues, STEPS } from './constraints';
import FormStepper from './FormStepper';
import FinalStep from './FormStepper/Steps/FinalStep';

const AddVideoForm = () => {
  const [page, setPage] = useState(0);
  const hookForm = useForm<IFormValues>({ defaultValues });
  const {
    handleSubmit,
    formState: { isSubmitted },
    reset,
  } = hookForm;

  const onSubmit = handleSubmit((data) => console.log(data));

  if (isSubmitted) return <FinalStep />;

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      width="fit-content"
      gap="16px"
    >
      {page === 0 && <LastVideosSlider onSelect={reset} />}
      <form onSubmit={onSubmit}>
        <FormStepper
          hookForm={hookForm}
          currentPage={page}
          changePage={setPage}
          stepTitles={STEPS.map((step) => step.title)}
        >
          {STEPS.map((step, idx) =>
            React.cloneElement(React.createElement(step.component), {
              key: idx,
              hookForm,
            })
          )}
        </FormStepper>
      </form>
    </Flex>
  );
};

export default AddVideoForm;
