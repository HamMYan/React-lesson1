import React from 'react';
import ReactDOM from 'react-dom';

function Hello(){
  return <div>
    <h1>Anna</h1>
    <h2>Anyan</h2>
  </div>
}

function App() {
  // return React.createElement('div',{},'dsssdsd')
  return <div>
    Hello World
    <input type='text' />
    <Hello />
  </div>
}


ReactDOM.render(<App />, document.getElementById('root'));
