import { useState } from 'react';
import Profile from './components/Profile';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' or 'profile'

  return (
    <div className="app">
      <nav>
        <button onClick={() => setCurrentView('home')}>Home</button>
        <button onClick={() => setCurrentView('profile')}>Profile</button>
      </nav>
      
      {currentView === 'profile' && <Profile />}
    </div>
  );
}

export default App;