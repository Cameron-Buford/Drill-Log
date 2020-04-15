import React from 'react';
import routes from './routes'
import Nav from './components/Nav'


function App() {
  return (
    <div>
      <div>
        <Nav/>
        {routes}
      </div>
      
    </div>
  );
}

export default App;
