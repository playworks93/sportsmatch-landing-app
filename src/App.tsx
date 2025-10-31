import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'
import MatchList from './components/MatchList'
import EventCard from './components/EventCard'
import MessagingInterface from './components/MessagingInterface'
import ForumThread from './components/ForumThread'

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
          <p className="tagline">Connect Over Your Passion for Sports</p>
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
          <li>User Profiles</li>
          <li>Sport Interest Matching</li>
          <li>Event Creation and RSVP</li>
          <li>Messaging and Chat</li>
          <li>Community Forums</li>
          <li>Activity Suggestions</li>
          </ul>
        </div>
        <p>&copy; 2025 SportsMatch. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App