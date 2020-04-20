import React from 'react';
import { mount, render } from 'enzyme';

import { ClickCounterFromLesson } from '../ClickCounterFromLesson';

describe('Click counter render check', () => {
  it('componentDidMount test', () => {
    const spy = jest.spyOn(ClickCounterFromLesson.prototype, 'componentDidMount');
    mount(<ClickCounterFromLesson />);
    expect(spy).toHaveBeenCalled();
  });

  it('should render to static HTML', () => {
    expect(render(<ClickCounterFromLesson />).text()).toEqual('Clicked 0 times!');
  });
});
