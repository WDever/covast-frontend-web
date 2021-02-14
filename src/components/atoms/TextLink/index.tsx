import { HTMLAttributes, memo, ReactElement, ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';

export type Size = 'xs' | 'base' | 'lg' | 'xl';

export interface Props extends LinkProps {
  size?: Size;
  children: ReactNode;
  className?: HTMLAttributes<HTMLElement>['className'];
}

function TextLink({ size = 'base', className, prefetch = true, children, ...props }: Props): ReactElement {
  return (
    <Link prefetch={prefetch} {...props}>
      <a className={`font-sans font=${size} ${className}`}>{children}</a>
    </Link>
  );
}

export default memo(TextLink);
