import { memo, ReactElement } from 'react';
import Header from '@organisms/Header';
import HeaderGreeting from '@organisms/HeaderGreeting';

function MainTemplate(): ReactElement {
  return (
    <div className='px-10'>
      <Header />
      <HeaderGreeting />
    </div>
  );
}

export default memo(MainTemplate);
