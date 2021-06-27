import React from 'react';
import Feed from './Feed';

export default {
  title: 'Components/Feed',
  component: Feed,
};

const Template = (args) => <Feed {...args} />;

export const Default = Template.bind({});
Default.args = {};
