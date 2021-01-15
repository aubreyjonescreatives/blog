import React from 'react'
import './App.css';
import IntrotoBlogpost from './IntrotoBlogpost'
import TopNavigation from './TopNavigation'
import HeroImage from './HeroImage'

function App() {
  return (
    <div className="App">
    <TopNavigation/>
    <HeroImage/>
    <IntrotoBlogpost/>
    </div>
  );
}

export default App;
