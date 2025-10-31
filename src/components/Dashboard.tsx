import { useState } from 'react'

interface DashboardProps {}

const Dashboard = (props: DashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <button 
          className={activeTab === 'overview' ? 'active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={activeTab === 'user_profiles' ? 'active' : ''}
          onClick={() => setActiveTab('user_profiles')}
        >
          User Profiles
        </button>
        <button 
          className={activeTab === 'sport_interest_matching' ? 'active' : ''}
          onClick={() => setActiveTab('sport_interest_matching')}
        >
          Sport Interest Matching
        </button>
        <button 
          className={activeTab === 'event_creation_and_rsvp' ? 'active' : ''}
          onClick={() => setActiveTab('event_creation_and_rsvp')}
        >
          Event Creation And Rsvp
        </button>
      </nav>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="tab-content">
            <h2>Dashboard Overview</h2>
            <div className="cards">
              <div className="card">
                <h3>Total Users</h3>
                <p className="stat">1,234</p>
              </div>
              <div className="card">
                <h3>Active Sessions</h3>
                <p className="stat">567</p>
              </div>
              <div className="card">
                <h3>Revenue</h3>
                <p className="stat">$12,345</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'user_profiles' && (
          <div className="tab-content">
            <h2>User Profiles</h2>
            <p>Manage your user profiles here.</p>
          </div>
        )}

        {activeTab === 'sport_interest_matching' && (
          <div className="tab-content">
            <h2>Sport Interest Matching</h2>
            <p>Manage your sport interest matching here.</p>
          </div>
        )}

        {activeTab === 'event_creation_and_rsvp' && (
          <div className="tab-content">
            <h2>Event Creation and RSVP</h2>
            <p>Manage your event creation and rsvp here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard