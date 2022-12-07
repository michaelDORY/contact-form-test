import styled from "styled-components";
import {spacer, SpacerProps} from "../../utils/spacer";

export type FileUploaderStyledProps = {
  buttonType?: 'standard' | 'button',
  imgUrl?: string | null,
  styles?: SpacerProps,
  width?: string,
  height?: string,
}

export const Layer = styled.div<{ isVisible: boolean }>(({isVisible}) => ({
  display: isVisible ? 'block' : 'none',
  content: '',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: `linear-gradient(0deg, #000000 -34.19%, rgba(0, 0, 0, 0) 100%)`,
}))

const ButtonStyle = styled.button<FileUploaderStyledProps>(({
                                                              styles = {},
                                                              imgUrl
                                                            }) => ({
  background: '#FFFFFF',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'box-shadow .3s ease-in-out',
  ...spacer(styles),
  '&:hover': {
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.4)',
  },
  '& p': {
    fontSize: '20px',
    fontWeight: 600,
    margin: 0,
    color: imgUrl ? '#fff' : '#000',
    zIndex: 10
  },
  '& img': {
    zIndex: 10
  }
}))

export const UploadingButton = styled(ButtonStyle)(({
                                                      buttonType = 'standard',
                                                      imgUrl,
                                                      width, height
                                                    }) => buttonType === 'button' ? ({
  width: '175px',
  height: '50px',
  borderRadius: '5px',
  boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.15)',
  fontWeight: 400,
  fontSize: '18px',
  color: 'rgba(0, 0, 0, 0.44)'
}) : ({
  border: '1px solid #B1B1B1',
  position: 'relative',
  ...(width && height ? {width, height} : {}),
  background: imgUrl ? `url(${imgUrl}) center / cover no-repeat;` : '#FFFFFF',
}))
