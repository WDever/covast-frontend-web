import { Meta, Story } from '@storybook/react/types-6-0';

import TextLink, { Props } from '.';

export default {
  title: 'Atoms/TextLink',
  component: TextLink,
} as Meta;

const Template: Story<Props> = props => <TextLink {...props} />;

export const Default = Template.bind({});
Default.args = {
  size: 'base',
  href: '',
  prefetch: true,
  children: 'text',
};
