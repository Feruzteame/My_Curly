
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import PrivateRoute from './PrivateRoute';
import Home from './pages/Home';
import Auth from './components/Auth';
import Public from './pages/PublicPage'


function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Routes>
			  <Route exact path="/dashboard" element={<PrivateRoute component={Home}/>}/>
        <Route exact path="/profile" element={<PrivateRoute component={Auth}/>}/>
        <Route path="/" element={<Public/>} />
		</Routes>
    </div>
  );
}

export default App;

