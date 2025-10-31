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
          className={activeTab === 'user_profiles_with_sports_interests_and_preferences' ? 'active' : ''}
          onClick={() => setActiveTab('user_profiles_with_sports_interests_and_preferences')}
        >
          User Profiles With Sports Interests And Preferences
        </button>
        <button 
          className={activeTab === 'swiping_mechanism_for_matching_with_other_users' ? 'active' : ''}
          onClick={() => setActiveTab('swiping_mechanism_for_matching_with_other_users')}
        >
          Swiping Mechanism For Matching With Other Users
        </button>
        <button 
          className={activeTab === 'in_app_messaging_for_communication' ? 'active' : ''}
          onClick={() => setActiveTab('in_app_messaging_for_communication')}
        >
          In App Messaging For Communication
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

        {activeTab === 'user_profiles_with_sports_interests_and_preferences' && (
          <div className="tab-content">
            <h2>User profiles with sports interests and preferences</h2>
            <p>Manage your user profiles with sports interests and preferences here.</p>
          </div>
        )}

        {activeTab === 'swiping_mechanism_for_matching_with_other_users' && (
          <div className="tab-content">
            <h2>Swiping mechanism for matching with other users</h2>
            <p>Manage your swiping mechanism for matching with other users here.</p>
          </div>
        )}

        {activeTab === 'in_app_messaging_for_communication' && (
          <div className="tab-content">
            <h2>In-app messaging for communication</h2>
            <p>Manage your in app messaging for communication here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard