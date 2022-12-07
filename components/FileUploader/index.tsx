import Image from 'next/image';
import React, { FC, useRef } from 'react';
import { useImagePreview } from '../../hooks/useImagePreview';
import ImagePlaceholder from '../../public/imagePlaceholder.png';
import ReplaceIcon from '../../public/replaceIcon.png';
import UploadingIcon from '../../public/uploadIcon.png';
import { Box } from '../Box/styles';
import { Flex } from '../Flex/styles';
import { FileUploaderStyledProps, Layer, UploadingButton } from './styles';

type Props = {
  value?: File | null;
  onChange?: (value: any) => void;
  accept?: string;
} & Partial<FileUploaderStyledProps>;

const FileUploader: FC<Props> = (props) => {
  const { buttonType, value, onChange, styles, accept } = props;
  const inputRef = useRef<null | HTMLInputElement>(null);
  const photoPreview = useImagePreview(value ?? null);

  const clickHandler = () => {
    inputRef.current?.click();
  };

  return (
    <>
      <UploadingButton
        type="button"
        buttonType={value ? 'standard' : buttonType}
        styles={styles}
        {...(buttonType !== 'button' || value
          ? {
              width: '207px',
              height: '175px',
            }
          : {})}
        onClick={clickHandler}
        imgUrl={photoPreview}
      >
        <Layer isVisible={!!value} />
        {buttonType === 'button' && !value ? (
          'בחירת קובץ'
        ) : (
          <Flex
            gap="22px"
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            {value ? (
              <Box width="75px" height="56px" />
            ) : (
              <Image src={ImagePlaceholder} width={75} height={56} alt="" />
            )}
            <Flex
              gap="9px"
              justifyContent="center"
              alignItems="center"
              height="fit-content"
            >
              <p>{value ? 'החלף קובץ' : 'בחירת קובץ'}</p>
              {value ? (
                <Image src={ReplaceIcon} width={20} height={17} alt="" />
              ) : (
                <Image src={UploadingIcon} width={15} height={16} alt="" />
              )}
            </Flex>
          </Flex>
        )}
      </UploadingButton>
      <input
        ref={inputRef}
        onChange={(e) =>
          onChange && e.target.files && onChange(e.target.files[0])
        }
        hidden
        accept={accept ?? '.jpg,.jpeg,.png'}
        type="file"
      />
    </>
  );
};

export default FileUploader;
