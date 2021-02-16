import { ReactElement, useMemo } from 'react';
import { numberWithCommas } from 'utils/functions';

export type MainVaccintationInfoTextType = 'today' | 'total';

export interface Props {
  type: MainVaccintationInfoTextType;
  amount: number;
}

function MainVaccinationInfoText({ type, amount }: Props): ReactElement {
  const infoText = useMemo((): string => {
    if (type === 'today') {
      const date = new Date();

      return `${date.getMonth() + 1}월 ${date.getDate()}일의`;
    }

    if (type === 'total') {
      return '전체';
    }

    return '';
  }, [type]);

  return (
    <div className='flex flex-col justify-center'>
      <p className='mb-3 font-sans text-xs leading-none text-center text-gray-dark'>{infoText} 접종자 수</p>
      <div className='flex items-center'>
        <p className='mr-2 font-sans text-xl leading-none text-main'>{numberWithCommas(amount)}</p>
        <p className='font-sans text-lg leading-none'>명</p>
      </div>
    </div>
  );
}

export default MainVaccinationInfoText;
