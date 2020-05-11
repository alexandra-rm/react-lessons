import React from 'react';

type Props = {
  name?: string;
};

const HelloWorld: React.FC<Props> = props => {
  return <div>Hello World{props.name ? `, ${props.name}!` : ', anonymous!'}</div>;
};

export default HelloWorld;
