import React, {
  Children,
  FC,
  ReactElement,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react';

interface Props {
  currentPage: number;
  // changePage: (newPage: number) => void;
  children: ReactNode;
}

const Stepper: FC<Props> = (props) => {
  const { currentPage, children } = props;
  const childrenArray = useMemo(() => Children.toArray(children), [children]);
  const pagesQuantity = useMemo(() => childrenArray.length, [childrenArray]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  useLayoutEffect(() => {
    console.log('hello');
    !isFirstRender.current && window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  if (currentPage < 0 && currentPage >= pagesQuantity) return <>Error</>;

  return childrenArray[currentPage] as ReactElement;
};

export default Stepper;
