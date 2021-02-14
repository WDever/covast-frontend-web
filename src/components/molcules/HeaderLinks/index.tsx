import TextLink from '@atoms/TextLink';
import { memo, ReactElement } from 'react';

function HeaderLinks(): ReactElement {
  return (
    <div>
      <TextLink className='mr-4' href='/reviews'>
        후기
      </TextLink>
      <TextLink href='/login'>로그인</TextLink>
    </div>
  );
}

export default memo(HeaderLinks);
