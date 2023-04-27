import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [activeNav, setActiveNav] = useState(false);
  console.log(activeNav)
  return (
    <div className={activeNav ? "App activeNav" : "App"}>
      <div className='nav-bar'>
        <nav className={activeNav ? "nav-items activeNav" : "nav-items"}>
          <a>Link 1</a>
          <a>Link 2</a>
        </nav>
        <button className='dropdown' onClick={() => setActiveNav(!activeNav)}></button>
      </div>
      <div className='page'>
        page
        <div className='content'></div>
        <div className='content'></div>
        <div className='content'></div>
        <div className='content'></div>
        <div className='content'></div>
        <div className='content'></div>
      </div>
    </div>
  );
}

export default App;
