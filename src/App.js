
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import PrivateRoute from './PrivateRoute';

import FavoriteProductCard from './pages/Favorite'
import Cart from './pages/Cart'
import Auth from './components/Auth';
import Public from './pages/PublicPage'
import ProductPage from './pages/ProductPage'
import About from './pages/AboutUs'
import Contact from './pages/ContactUs'

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Routes>
        <Route exact path="/profile" element={<PrivateRoute component={Auth}/>}/>
        <Route exact path="/my_Favorite" element={<PrivateRoute component={FavoriteProductCard}/>}/>
        <Route exact path="/my_Cart" element={<PrivateRoute component={Cart}/>}/>
        <Route path="/" element={<Public/>} />
        <Route path="/product" element={<ProductPage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
		</Routes>
    </div>
  );
}

export default App;

