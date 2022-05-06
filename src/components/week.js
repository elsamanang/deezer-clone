import React, {Component} from "react";
import RecentPlayItem from "../tools/recent-play";

export default class Week extends Component {

    render() {
        return (
            <div className="row m-2">
                <div className="grid">
                    <h4 className="link_title">
                    Les sorties de la semaine
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