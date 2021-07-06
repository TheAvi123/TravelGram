import React from 'react';
import EditProfileScreen from '../screens/EditProfileScreen';

export default {
    title: 'ProfileScreen',
    component: EditProfileScreen,
};

const Template = args => <EditProfileScreen {...args} />;

export const Default = Template.bind({});