import { Meta, Story } from '@storybook/react/types-6-0';

import Header from '.';

export default {
  title: 'Organisms/Header',
  component: Header,
} as Meta;

const Template: Story = () => <Header />;

export const Default = Template.bind({});
