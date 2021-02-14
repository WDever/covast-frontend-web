import { ReactElement } from 'react';
import Image from 'next/image';
import HeaderLinks from '@molcules/HeaderLinks';

function Header(): ReactElement {
  return (
    <header className='sticky inset-0 flex items-center justify-between py-6.5'>
      <Image src='/assets/covast-logo.svg' width={78} height={17} />
      <HeaderLinks />
    </header>
  );
}

export default Header;
