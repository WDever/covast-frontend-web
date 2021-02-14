import Heading from '@atoms/Heading';
import ToggleButton from '@atoms/ToggleButton';
import { memo, ReactElement } from 'react';

function HeaderGreeting(): ReactElement {
  return (
    <section className='flex items-end justify-between pr-2.5 mt-10'>
      <Heading>
        지금 바로
        <br />
        백신을 예약하세요
      </Heading>
      <ToggleButton isToggled text='예약하기' />
    </section>
  );
}

export default memo(HeaderGreeting);
