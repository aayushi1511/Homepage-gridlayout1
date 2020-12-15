import React from 'react';

import NavList from './index';

export default {
  title: 'Example/molecules',
  component: NavList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <NavList {...args} />;

export const NavTab = Template.bind({});
NavTab.args = {
  primary: true,
  label: 'profileImage',
  name: 'Home',
  image: 'profile'
};