import { ReactElement, ReactNode } from 'react';

export type HeadingStep = 1 | 2 | 3 | 4 | 5;

export interface Props {
  step?: HeadingStep;
  children: ReactNode;
}

function Heading({ step = 1, children }: Props): ReactElement {
  switch (step) {
    case 1:
      return <h1 className='font-sans text-lg font-extrabold'>{children}</h1>;

    case 2:
      return <h2>{children}</h2>;

    case 3:
      return <h3>{children}</h3>;

    case 4:
      return <h4>{children}</h4>;

    case 5:
      return <h5>{children}</h5>;

    default:
      return <h1>{children}</h1>;
  }
}

export default Heading;
