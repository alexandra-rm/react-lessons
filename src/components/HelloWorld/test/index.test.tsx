import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import HelloWorld from '../index';

describe('components/HelloWorld', () => {
  it('рендерится по умолчанию', () => {
    expect(shallow(<HelloWorld />).matchesElement(<div>Hello World, anonymous!</div>)).toBe(true);
  });

  it('Рендерится с именем', () => {
    expect(shallow(<HelloWorld name="Alex" />).matchesElement(<div>Hello World, Alex!</div>)).toBe(
      true,
    );
  });
});
