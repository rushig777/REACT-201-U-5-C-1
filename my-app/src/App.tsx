import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav } from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import { Body } from './components/Body';
import { CardDetails } from './components/CardDetails';
import { Checkout } from './components/Checkout';

function App() {
  return (
    <div className="App">
        <Nav/>
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/:id" element={<CardDetails />}>
          {" "}
        </Route>
        <Route path="checkout" element={<Checkout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
