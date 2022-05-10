import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Layout/footer';
import Navbar from './Layout/navbar';
import Sidebar from './Layout/sidebar';
import Home from './pages/home';
import Poadcast from './pages/poadcast';

class App extends Component {
  
  render() {

    return (
      <div className="content">
        <div className='row'>
          <div className='col-md-2 sidebar'>
            <Sidebar />
          </div>
          <div className='col-md-10 body'>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/poadcast' element={<Poadcast />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
