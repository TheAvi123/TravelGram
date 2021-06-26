import React from 'react';
import ProfileScreen from '../screens/ProfileScreen';

export default {
    title: 'ProfileScreen',
    component: ProfileScreen,
};

const Template = args => <ProfileScreen {...args} />;

export const Default = Template.bind({});