import { ComponentStory } from '@storybook/react';
import React from 'react';
import { Footer } from './Footer';
export default {
  title: 'Footer',
  component: Footer
};
export const normal: ComponentStory<typeof Footer> = () => <Footer/>;