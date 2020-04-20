import React, { Component } from 'react';

import { ClickCounterButtonFromLesson } from './ClickCounterButtonFromLesson';

interface Prop {
  start?: number;
}

interface State {
  count: number;
}

export class ClickCounterFromLesson extends Component<Prop, State> {
  constructor(props: Prop) {
    super(props);
    this.state = {
      count: props.start || 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    const { count } = this.state;
    this.setState({ count: count + 1 });
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
