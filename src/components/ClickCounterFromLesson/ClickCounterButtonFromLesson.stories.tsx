import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';

import { ClickCounterButtonFromLesson } from './ClickCounterButtonFromLesson';

export default {
  title: 'ClickCounterButtonFromLesson',
  decorators: [withKnobs],
};

export const ClickCounterButtonFromLessonStory = () => {
  const count = number('Number', 0);

  return (
    <ClickCounterButtonFromLesson increment={action('Increment')}>
      {count}
    </ClickCounterButtonFromLesson>
  );
};
