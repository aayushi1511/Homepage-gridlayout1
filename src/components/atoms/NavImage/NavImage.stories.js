import React from 'react';

import { NavImage } from './index';
import profile from '../../../assets/profile.jpg';

export default {
  title: 'Example/atoms',
  component: NavImage,
};

const Template = (args) => <NavImage {...args} profile />;

export const ProfileImg = Template.bind({});
console.log('profile', profile);
ProfileImg.args = {
  primary: true,
  label: 'profileImage',
  image: profile
};