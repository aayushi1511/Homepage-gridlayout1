import React from 'react';

import { NavList } from './index';
import home from '../../../assets/home.svg';

export default {
  title: 'Example/molecules',
  component: NavList,
  argTypes: {
    backgroundColor: 'grey',
  },
};

const Template = (args) => <NavList {...args} />;

export const NavTab = Template.bind({});
NavTab.args = {
  primary: true,
  label: 'profileImage',
  name: 'Home',
  image: 'https://image.flaticon.com/icons/png/512/102/102061.png',
};