import { useState } from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState(0);

  return (
    <div className='App'>
      <h1>Count: {value}</h1>
      <button onClick={() => {
        setValue(value + 1);
      }}>
        Click
      </button>
    </div>
  );
}

export default App;
