import { memo, ReactElement } from 'react';
import Header from '@organisms/Header';
import HeaderGreeting from '@organisms/HeaderGreeting';
import MainVaccinationInfo from '@organisms/MainVaccinationInfo';

function MainTemplate(): ReactElement {
  return (
    <div className='px-10'>
      <Header />
      <HeaderGreeting />
      <MainVaccinationInfo />
    </div>
  );
}

export default memo(MainTemplate);
