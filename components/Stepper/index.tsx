import React, {Children, FC, ReactElement, ReactNode, useMemo} from 'react';

interface Props {
  currentPage: number;
  // changePage: (newPage: number) => void;
  children: ReactNode;
}

const Stepper: FC<Props> = (props) => {
  const {currentPage, children} = props
  const childrenArray = useMemo(() => Children.toArray(children), [children]);
  const pagesQuantity = useMemo(() => childrenArray.length, [childrenArray]);

  if (currentPage < 0 && currentPage >= pagesQuantity) return <>Error</>;

  return childrenArray[currentPage] as ReactElement;
};

export default Stepper;
