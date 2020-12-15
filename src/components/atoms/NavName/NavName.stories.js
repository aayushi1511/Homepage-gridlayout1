import React from 'react';

import NavName from './index';

export default {
  title: 'Example/atoms',
  component: NavName,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <NavName {...args} />;

export const Name = Template.bind({});
Name.args = {
  primary: true,
  label: 'NavName',
  name: 'Dad'
};