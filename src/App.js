import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
function App() {
  const [mode, setmode] = useState('light');
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'black'
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
      <div className="container my-3">
        <TextForm heading="Enter your text to analyze" mode={mode} />
      </div>
    </>
  );
}
export default App;
