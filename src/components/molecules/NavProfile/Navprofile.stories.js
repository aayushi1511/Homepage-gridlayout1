import React from 'react';

import { NavProfile } from './index';
import profile from '../../../assets/profile.jpg';


export default {
  title: 'Example/molecules',
  component: NavProfile,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <NavProfile {...args} />;

export const NavContent = Template.bind({});
NavContent.args = {
  primary: true,
  label: 'profileImage',
  name: 'Name',
  image: profile
};