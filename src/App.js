import React, { Component } from 'react';
import './App.css';
import Flow from './components/flow';
import Footer from './Layout/footer';
import Navbar from './Layout/navbar';
import Sidebar from './Layout/sidebar';

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
            <div className='container'>
              <Flow />
              body
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
