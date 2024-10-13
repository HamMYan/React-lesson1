import React, { useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Count: {count}</h2>
    </div>
  )
}


export default Counter