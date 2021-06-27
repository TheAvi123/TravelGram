import React from 'react';
import CreateFormButton from './CreateFormButton';

export default {
  title: 'Components/CreateFormButton',
  component: CreateFormButton,
};

const Template = (args) => <CreateFormButton {...args} />;

export const CreateTripButton = Template.bind({});
CreateTripButton.args = { formType: 'trip' };

export const CreateTripItemButton = Template.bind({});
CreateTripItemButton.args = { formType: 'item' };
