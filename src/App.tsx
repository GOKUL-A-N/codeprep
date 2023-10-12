import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className=''>
      <Navbar />
      <Home />
    </div>
  )
}

export default App