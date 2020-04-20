import React from 'react';
import { shallow } from 'enzyme';

import { ClickCounterButtonFromLesson } from '../ClickCounterButtonFromLesson';

const incMock = jest.fn();

describe('Click counter render check', () => {
    it('Default render', () => {
        expect(
            shallow(<ClickCounterButtonFromLesson increment={incMock} />).matchesElement(
                <button>Clicked 0 times!</button>
            )
        ).toBe(true);
    });

    it('Default render with prop', () => {
        expect(
            shallow(
                <ClickCounterButtonFromLesson increment={incMock}>{1}</ClickCounterButtonFromLesson>
            ).matchesElement(<button>Clicked 1 times!</button>)
        ).toBe(true);
    });

    it('Click simulation', () => {
        const wrapper = shallow(
            <ClickCounterButtonFromLesson increment={incMock}>{1}</ClickCounterButtonFromLesson>
        );

        expect(wrapper.text()).toEqual('Clicked 1 times!');

        wrapper.find('button').simulate('click');

        expect(incMock.mock.calls.length).toBe(1);
    });
});
