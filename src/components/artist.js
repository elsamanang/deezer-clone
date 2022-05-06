import React, {Component} from "react";
import ArtistItem from "../tools/artist-item";

export default class Artist extends Component {

    render() {
        return (
            <div className="row m-2">
                <div className="grid">
                    <h4>Vous devriez aimer</h4>
                </div>
                <div className="grid grid-cols-4 gap-8 my-2">
                    <ArtistItem />
                    <ArtistItem />
                    <ArtistItem />
                    <ArtistItem />
                </div>
            </div>
        )
    }
}