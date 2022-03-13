import React from 'react';
import FiberSensorProvider from './context/fiberSensorProvider';
import Dashboard from './components/Dashboard';

function App() {

  return (
    <FiberSensorProvider>
      <Dashboard />
    </FiberSensorProvider>
  );
}

export default App;