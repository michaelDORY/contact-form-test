import React, {useEffect, useState} from 'react';

type useImagePreviewType = (image: File | null) => string | null

export const useImagePreview: useImagePreviewType = (image) => {
  const [imagePreview, setImagePreview] = useState<null | string>(null);

  useEffect(() => {
    setImagePreview(image ? URL.createObjectURL(image) : null);
  }, [image]);

  return imagePreview;
};
