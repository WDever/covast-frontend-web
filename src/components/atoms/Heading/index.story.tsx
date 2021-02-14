import { Meta, Story } from '@storybook/react/types-6-0';

import Heading, { Props } from '.';

export default {
  title: 'Atoms/Haeding',
  component: Heading,
} as Meta;

const Template: Story<Props> = props => <Heading {...props} />;

export const Default = Template.bind({});
Default.args = {
  step: 1,
  children: 'Heading',
};
