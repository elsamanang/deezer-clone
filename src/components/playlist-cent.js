import React, {Component} from "react";
import PlayCentItem from "../tools/play-cent";

export default class PlaylistCent extends Component {

    render() {
        return (
            <div className="row m-2">
                <div className="grid">
                    <h4>100% fait pour vous</h4>
                </div>
                <div className="grid grid-cols-4 gap-8 my-2">
                    <PlayCentItem />
                    <PlayCentItem />
                    <PlayCentItem />
                    <PlayCentItem />
                </div>
            </div>
        )
    }
}