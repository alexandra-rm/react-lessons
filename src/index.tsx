import React from 'react';
import { render } from 'react-dom';

import { ClickCounterFromLesson } from './components/ClickCounterFromLesson/ClickCounterFromLesson';

import HelloWorld from './components/HelloWorld/index';

render(
  <>
    <h1>React here!</h1>
    <ClickCounterFromLesson start={10} />
    <HelloWorld name={'Alex'} />
    <HelloWorld />
  </>,
  document.getElementById('root'),
);
