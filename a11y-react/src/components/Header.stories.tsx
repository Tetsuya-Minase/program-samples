import { ComponentStory } from '@storybook/react';
import React from 'react';
import { Header } from './Header';

export default {
  title: 'Header',
  component: Header
};

export const normal: ComponentStory<typeof Header> = () => <Header />