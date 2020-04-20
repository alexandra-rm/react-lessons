import React from 'react';

interface Prop {
  increment: () => void;
  children?: number;
}

export const ClickCounterButtonFromLesson = ({ increment, children = 0 }: Prop) => (
  <button onClick={increment}>Clicked {children} times!</button>
);
