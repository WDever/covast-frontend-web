import Separator from '@atoms/Separator';
import MainVaccintaionInfoText from '@molcules/MainVaccintationInfoText';
import { ReactElement } from 'react';

function MainVaccinationInfo(): ReactElement {
  return (
    <section className='flex items-center justify-between px-3 mt-18'>
      <MainVaccintaionInfoText type='today' amount={1000} />
      <Separator color='black' height={40} />
      <MainVaccintaionInfoText type='total' amount={1000} />
    </section>
  );
}

export default MainVaccinationInfo;
