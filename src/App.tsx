import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { OrderOptions } from './components/OrderOptions';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { DetailedMenu } from './components/DetailedMenu';

function HomePage() {
  return (
    <>
      <Hero />
      <Menu />
      <OrderOptions />
      <Location />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<DetailedMenu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;