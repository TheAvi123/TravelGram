import React from 'react';
import CreateTrip from './CreateTrip';

export default {
  title: 'Components/CreateTrip',
  component: CreateTrip,
};

const Template = (args) => <CreateTrip {...args} />;

export const Default = Template.bind({});
