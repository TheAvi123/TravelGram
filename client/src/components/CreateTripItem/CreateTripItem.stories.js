import React from 'react';
import CreateTripItem from './CreateTripItem';

export default {
  title: 'Components/CreateTripItem',
  component: CreateTripItem,
};

const Template = (args) => <CreateTripItem {...args} />;

export const Default = Template.bind({});
