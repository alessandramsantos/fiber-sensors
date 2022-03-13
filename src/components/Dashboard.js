import React from 'react';
import '../css/Dashboard.css'
import Header from './Header';
import LeakTable from './LeakTable';
import SimpleMap from './Map'

function Dashboard() {
  return (
    <div className='oi'>
      <Header />
      <SimpleMap />
      <LeakTable />
    </div>
  );
}

export default Dashboard;