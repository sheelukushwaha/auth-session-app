import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Timer from './Timer';
import useInactivity from '../hooks/useInactivity';
import '../App.css';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const { inactive, counter } = useInactivity(60);

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user.firstName} {user.lastName}</h2>
      <Timer userId={user.id} />

      {inactive && (
        <div className="inactivity-dialog">
          <p>Inactive for a while. Logging out in {counter}s</p>
          <button onClick={() => window.location.reload()}>Extend Session</button>
          <button onClick={logout}>Logout</button>
        </div>
      )}

      <button className="logout-button" onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;