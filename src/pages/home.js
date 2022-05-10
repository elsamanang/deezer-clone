import React, {Component} from "react";
import Flow from './../components/flow';
import PourVous from './../components/pour-vous';
import Recent from './../components/recent';
import Playlist from './../components/playlist';
import Category from './../components/category';
import News from './../components/news';
import Artist from './../components/artist';
import Week from './../components/week';
import PlaylistCent from './../components/playlist-cent';

export default class Home extends Component {

    render() {
        return(
            <div className='container'>
              <Flow />
              <PourVous />
              <Recent />
              <Playlist />
              <Category />
              <News titre={"Nouveautés pour vous"}/>
              <Artist />
              <Week />
              <PlaylistCent />
            </div>
        )
    }
}