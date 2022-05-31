import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { Navbar } from './Navbar';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/about" element={<AboutScreen />} />
            <Route exact path="/login" element={<LoginScreen />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}
