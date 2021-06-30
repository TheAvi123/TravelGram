import React from 'react';
import TripInfoCard from './TripInfoCard';

export default {
  title: 'Components/TripInfoCard',
  component: TripInfoCard,
};

const Template = (args) => <TripInfoCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  trip: {
    title: 'test title',
    description: 'test description',
    startTime: '2021-05-27T13:02',
    endTime: '2021-05-27T13:02',
    selectedUsers: ['anguilla', 'antarctica'],
  },
};
