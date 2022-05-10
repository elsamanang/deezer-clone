import React, {Component} from "react";
import Artist from './components/artist';
import Category from './components/category';
import Flow from './components/flow';
import News from './components/news';
import Playlist from './components/playlist';
import PlaylistCent from './components/playlist-cent';
import PourVous from './components/pour-vous';
import Recent from './components/recent';
import Week from './components/week';

export default class Home extends Component {

    render() {
        return(
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
            </div>
        )
    }
}