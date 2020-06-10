import React from 'react';

interface ClickCounterButtonFromLessonProps {
  increment: () => void;
  children?: number;
}

export const ClickCounterButtonFromLesson: React.FC<ClickCounterButtonFromLessonProps> = ({
  increment,
  children = 0,
}: ClickCounterButtonFromLessonProps) => (
  <button onClick={increment}>Clicked {children} times!</button>
);
