import React from 'react';
import TripMap from './TripMap';

export default {
  title: 'Components/TripMap',
  component: TripMap,
};

const Template = (args) => <TripMap {...args} />;

export const Default = Template.bind({});
