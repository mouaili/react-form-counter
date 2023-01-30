import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Title from './Components/Title';
import Counter from './Components/Counter';

function App() {
  return (
    <div className='container'>
      <div className='row m-5'>
        <Title>Un formulaire, un compteur avec react.js</Title>
        <Counter />
      </div>
    </div>
  );
}

export default App;
