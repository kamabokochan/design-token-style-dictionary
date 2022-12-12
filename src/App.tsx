import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import {
  BackgroundPrimary,
  BackgroundSecondary,
} from './style-dictionary-dist/variables.js';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App" style={{ background: BackgroundPrimary }}>
        <p>BackgroundPrimary 要素</p>
      </div>
      <div className="App" style={{ background: BackgroundSecondary }}>
        <p>BackgroundPrimary 要素</p>
      </div>
    </>
  );
}

export default App;
