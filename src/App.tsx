import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'
import SwipeCard from './components/SwipeCard'
import Messages from './components/Messages'
import EventList from './components/EventList'
import Forum from './components/Forum'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>SportsMatch</h1>
          <p className="tagline">Connect Through Your Love for Sports</p>
        </div>
        {isAuthenticated && (
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        )}
      </header>

      <main className="app-main">
        {isAuthenticated ? (
          <Dashboard />
        ) : (
          <Auth onLogin={handleLogin} />
        )}
      </main>

      <footer className="app-footer">
        <div className="features">
          <h3>Key Features:</h3>
          <ul>
          <li>User profiles with sports interests and preferences</li>
          <li>Swiping mechanism for matching with other users</li>
          <li>In-app messaging for communication</li>
          <li>Event creation for local sports activities</li>
          <li>Community forums for discussions on sports</li>
          <li>Personalized recommendations based on user activity</li>
          </ul>
        </div>
        <p>&copy; 2025 SportsMatch. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App