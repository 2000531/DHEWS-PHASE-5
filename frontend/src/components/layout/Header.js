import React from 'react';

function Header() {
  const lastUpdate = new Date().toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  return (
    <header className="header">
      <h1>DHEWS Monitoring Dashboard</h1>
      <div>
        <span>Last Data Update: {lastUpdate}</span>
      </div>
    </header>
  );
}

export default Header;