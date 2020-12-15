import React from 'react';

import NavImage from './index';
import profile from '../../../assets/profile.jpg'

export default {
  title: 'Example/atoms',
  component: NavImage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <NavImage {...args} />;

export const ProfileImg = Template.bind({});
ProfileImg.args = {
  primary: true,
  label: 'profileImage',
  image: profile
};