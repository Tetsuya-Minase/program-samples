import React from 'react';
import { ComponentStory } from '@storybook/react';
import { Main } from './Main';

export default {
  title: 'Main',
  component: Main
};
export const normal: ComponentStory<typeof Main> = () => <Main />