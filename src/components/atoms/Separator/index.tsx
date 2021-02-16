import { ReactElement, useMemo } from 'react';

export type SeparatorColor = 'black' | 'gray';
export type SeparatorHeight = 40 | 44;

export interface Props {
  color?: SeparatorColor;
  height: SeparatorHeight;
}

function Separator({ color = 'black', height }: Props): ReactElement {
  const separatorHeight = useMemo(() => Math.round(height / 4), [height]);

  return <div className={`w-px bg-${color} h-${separatorHeight}`}></div>;
}

export default Separator;
