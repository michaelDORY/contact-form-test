import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};
