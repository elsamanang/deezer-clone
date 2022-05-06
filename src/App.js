import React, { Component } from 'react';
import './App.css';
import Artist from './components/artist';
import Category from './components/category';
import Flow from './components/flow';
import News from './components/news';
import Playlist from './components/playlist';
import PlaylistCent from './components/playlist-cent';
import PourVous from './components/pour-vous';
import Recent from './components/recent';
import Week from './components/week';
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
              <PourVous />
              <Recent />
              <Playlist />
              <Category />
              <News />
              <Artist />
              <Week />
              <PlaylistCent />
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
