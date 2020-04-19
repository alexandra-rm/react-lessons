import React, { ReactNode } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { ClickCounterFromLesson } from './ClickCounterFromLesson';

export default {
    title: 'ClickCounterFromLesson',
    decorators: [withKnobs],
};

export const clickCounterWithStart = (): ReactNode => <ClickCounterFromLesson start={11}/>;
