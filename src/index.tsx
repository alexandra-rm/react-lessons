import React from 'react';
import { render } from 'react-dom';

import { ClickCounterFromLesson } from './components/ClickCounterFromLesson/ClickCounterFromLesson';

render(
  <>
    <h1>React here!</h1>
    <ClickCounterFromLesson start={10} />
  </>,
  document.getElementById('root'),
);
