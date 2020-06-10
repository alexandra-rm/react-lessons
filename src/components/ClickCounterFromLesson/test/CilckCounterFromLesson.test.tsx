import React from 'react';

import { mount, render } from 'enzyme';

import { ClickCounterFromLesson } from '../ClickCounterFromLesson';

import { ClickCounterButtonFromLesson } from '../ClickCounterButtonFromLesson';

describe('Click counter render check', () => {
  it('componentDidMount test', () => {
    const spy = jest.spyOn(ClickCounterFromLesson.prototype, 'componentDidMount');
    mount(<ClickCounterFromLesson />);
    expect(spy).toHaveBeenCalled();
  });

  it('should render to static HTML', () => {
    expect(render(<ClickCounterFromLesson />).text()).toEqual('Clicked 0 times!');
  });

  it('should increment after click', () => {
    let wrapper = mount(<ClickCounterFromLesson start={1} />);

    wrapper.find(ClickCounterButtonFromLesson).simulate('click');

    expect(wrapper.text()).toEqual('Clicked 2 times!');
  });
});
