import React from 'react';

import Navbar from './index';

export default {
  title: 'Example/organisms',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Navbar {...args} />;

export const Layout = Template.bind({});
Layout.args = {
  primary: true,
  label: 'Navbar',
};