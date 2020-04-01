import React from 'react';

interface Props {
  name: string;
  num?: number;
}

function App({ name, num = 1 }: Props) {
  if (num <= 0) {
    throw new Error('报错了');
  }
  return (
  <div>hello {name + num}</div>
  )
}

export default App;