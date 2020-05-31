import React, { Component } from 'react';

import { ClickCounterButtonFromLesson } from './ClickCounterButtonFromLesson';

interface ClickCounterFromLessonProps {
  start?: number;
}

interface ClickCounterFromLessonState {
  count: number;
}

export class ClickCounterFromLesson extends Component<
  ClickCounterFromLessonProps,
  ClickCounterFromLessonState
> {
  constructor(props: ClickCounterFromLessonProps) {
    super(props);
    this.state = {
      count: props.start || 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState(state => ({ count: state.count + 1 }));
  }

  componentDidMount() {
    console.log('ClickCounter: componentDidMount');
  }

  render() {
    const { count } = this.state;
    return (
      <ClickCounterButtonFromLesson increment={this.increment}>
        {count}
      </ClickCounterButtonFromLesson>
    );
  }
}
