import React, {Component} from "react";
import RecentPlayItem from "../tools/recent-play";

export default class News extends Component {
    state = {
        titre: this.props.titre
    }
    render() {
        const {titre} = this.state;
        return (
            <div className="row m-2">
                <div className="grid">
                    <h4 className="link_title">
                        {titre}
                        <span className="i mx-1"><i class="fa-solid fa-angle-right"></i></span>
                    </h4>
                </div>
                <div className="grid grid-cols-4 gap-8 my-2">
                    <RecentPlayItem />
                    <RecentPlayItem />
                    <RecentPlayItem />
                    <RecentPlayItem />
                </div>
            </div>
        )
    }
}