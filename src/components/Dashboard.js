import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Timer from './Timer';
import useInactivity from '../hooks/useInactivity';
import '../App.css';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const { inactive, counter, resetInactivity } = useInactivity(60, logout);

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user.firstName} {user.lastName}</h2>
      <Timer userId={user.id} />

      {inactive && (
        <div className="inactivity-dialog">
          <p>Inactive for a while. Logging out in <strong>{counter}</strong>s</p>
          <div className="dialog-buttons">
            <button className="extend-button" onClick={resetInactivity}>
              Extend Session
            </button>
            <button className="logout-button" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      )}

      <div className="button-row">
        <button className="logout-button" onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;